# Packages
- `mocha`: the test runner
- `chai`: the assertion library
- `nodemon`: restart express server when any file changes
- `supertest`: use to test API endpoints
- `ts-node`: to use TypeScript on the node project
- `tsconfig-paths`: allow to use absolute imports throughout node project, even in mocha tests.


# Installation Commands
```bash
$ npm i --save express dotenv
$ npm i -D mocha chai typescript nodemon supertest ts-node tsconfig-paths
$ npm i -D @types/mocha @types/chai @types/node @types/supertest @types/express # to use Types on installed packages
```

# Initilize typescript configuration
```bash
$ tsc --init
```