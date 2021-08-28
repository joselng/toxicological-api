require('dotenv').config();

module.exports = {
  "type": process.env.B_DRIVER,
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_DATABASE,
  "synchronize": false,
  "logging": false,
  "entities": [
    "./src/modules/**/entities/*.ts"
  ],
  "migrations": [
    "./src/app/database/migrations/*.ts"
  ],
  "cli": {
    "entitiesDir": "./src/modules/**/entities",
    "migrationsDir": "./src/app/database/migrations",
  }
};
