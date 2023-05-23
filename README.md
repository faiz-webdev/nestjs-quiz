<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).


## License

Nest is [MIT licensed](LICENSE).

npm i class-validator
npm i class-transformer
npm i @nestjs/typeorm typeorm
npm i pg
npm i --save @nestjs/config
npm i --save bcrypt @types/bcrypt
npm install mysql --save

## Migration related doubts
 - 1. What we are trying to do? We generate migration based on our models
 - 2. Why we need two different configurations? -one async and one is not
 - 3. Make necessary edits to the config
 - 4. Creare new file for typeorm migrations
 - 5. Run typeorm CLI to register the config file
 - 6. Delete all tables and  generate a new migration
 - 7. See the new tables, the migration table, and the Migration file
  - "typeorm:cli": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli -f src/config/typeorm.config-migrations.ts",
  - "migration:generate": "npm run typeorm:cli -- migration:generate -d src/database/migrations   -n",
  - "migration:create": "npm run typeorm:cli -- migration:create -d src/database/migrations -n",
  - "migration:run": "npm run typeorm:cli -- migration:run",
  - "migration:revert": "npm run typeorm:cli -- migration:revert"
## Migration setup, add all below files to package.json into script object

- "typeorm:cli": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli -f src/config/typeorm.config-migrations.ts",
- "migration:generate": "npm run typeorm:cli -- migration:generate -d src/database/migrations -n",
- "migration:create": "npm run typeorm:cli -- migration:create -d src/database/migrations -n",
- "migration:run": "npm run typeorm:cli -- migration:run",
- "migration:revert": "npm run typeorm:cli -- migration:revert",
- "seed:config": "ts-node ./node_modules/typeorm-seeding/dist/cli.js config -n src/config/typeorm.config-migrations.ts",
- "seed:run": "ts-node ./node_modules/typeorm-seeding/dist/cli.js seed -n src/config/typeorm.   config-migrations.ts",
- "db:refresh": "npm run typeorm:cli schema:drop && npm run migration:run && npm run seed:run"

## Show migrations
npm run typeorm:cli migration:show

## Generate migrations
 - npm run migration:generate BaseMigrations
 - npm run migration:run


## Passport Setup
 - npm i @nestjs/passport
 - npm i --D @types/passport-local @types/passport
 - sudo npm install passport-local --save
 - npm i --save @nestjs/passport passport

## JWT setup
  - npm i @nestjs/jwt passport-jwt
  - npm i -D @types/passport-jwt

## Swagger integration
  - npm install --save @nestjs/swagger

## Typeorm pagination
  - npm i nestjs-typeorm-paginate

## Typeorm seeder
  - npm i typeorm-seeding
  # To see seed command
    - npm run seed:config
  # Generate fake users
    - npm i @ngneat/falso
  # To run seed
    - npm run seed:run
