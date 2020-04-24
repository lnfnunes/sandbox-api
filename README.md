# Sandbox API (mock)

> Sandbox mock API for frontend development

[![Build Status][ci-image]][ci-url]
[![Coverage Status][coverage-image]][coverage-url]

It's a base NodeJS server application to fastly create your own back-end API for prototyping and mocking during front-end development.

It uses the [Express](https://expressjs.com/) module as the HTTP Server.

## Getting started

Install the dependencies

```bash
$ npm install
```

Start the server

```bash
$ npm start
```

You should see a message _"Server is running at port 3000"_.\
Now if you go to http://localhost:3000, you'll get

```json
{
  "status": "UP"
}
```

> Tip: alternatively, you can use [Nodemon](https://www.npmjs.com/package/nodemon) to automatically reload the server during development whenever a file changes, making the development experience much better.

## Scripts

```sh
npm install   # Install the dependencies
npm lint      # Lint src files using Eslint and Prettier
              # to ensure a code styling and find code smells.
              # Runs automatically before each commit.
npm start     # Start the application
npm run tdd   # Run the test suits in watch mode.
              # Automatically runs during code changes.
npm test      # Run the test suit with coverage
              # Runs automatically before each push.
```

## Folder structure

```sh
├── __mocks__         # Manual mocks used by the tests (Jest)
├── __tests__         # Test files (Jest)
├── index.js          # Application entry point
└── src
    ├── controllers   # Controllers for each Route
    ├── helpers       # Shared helpers (utils)
    ├── middlewares   # Middlewares for the application
    ├── models        # Models of the application
    ├── routes        # Routes auto-loader
    ├── server.js     # Server initialization
```

## License

[MIT](LICENSE) © Leandro Nunes

[ci-image]: https://travis-ci.org/lnfnunes/sandbox-api.svg?branch=master
[ci-url]: https://travis-ci.org/lnfnunes/sandbox-api
[coverage-image]: https://coveralls.io/repos/github/lnfnunes/sandbox-api/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/lnfnunes/sandbox-api?branch=master
