require('dotenv').config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { AuthenticationError, ApolloError } = require("apollo-server-express");

const { User } = require("../../database/models");

module.exports = {
  Mutation: {
    async register(root, args, context) {
      const { name, email, password } = args.input;
      return User.create({ name, email, password });
    },

    async login(root, { input }, context) {
      const { email, password } = input;
      const user = await User.findOne({ where: { email } });
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_TOKEN, { expiresIn: process.env.JWT_TOKEN_EXPIRED });
        return { ...user.toJSON(), token };
      }
      throw new AuthenticationError("invalid Credentials");
    },
  },

  Query: {
    async getAllUsers(root, args, context) {
      return User.findAll();
    },
    async getSingleUser(_, { userId }, context) {
      const user = await User.findByPk(userId);
      if (!user) {
        return new ApolloError("User tidak ditemukan");
      }
      return user;
    },
  },
  User: {
    posts(user) {
      return user.getPosts();
    },
  },
};
