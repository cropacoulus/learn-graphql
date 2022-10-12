require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DEVELOPMENT,
    host: process.env.DB_HOSTNAME,
    dialect: "postgres",
    use_env_variable: "DEV_DATABASE_URL",
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_TEST,
    host: process.env.DB_HOSTNAME,
    dialect: "postgres",
    use_env_variable: "TEST_DATABASE_URL",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_PRODUCTION,
    host: process.env.DB_HOSTNAME,
    dialect: "postgres",
    use_env_variable: "PRODUCTION_DATABASE_URL",
  },
};
