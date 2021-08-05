export default {
  "type": "sqlite",
  "database": "./src/database/db.sqlite",
  "synchronize": true,
  "logging": false,
  "entities": [
    "./src/modules/**/typeorm/entities/*.ts"
  ],
  "migrations": [
    "./src/shared/typeorm/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/shared/typeorm/migrations"
  }
}
