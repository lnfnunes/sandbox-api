# Sandbox API (mock)

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

You should see a message _"JSON Server is running at port 3000"_.\
Now if you go to http://localhost:3000, you'll get

```json
{
  "status": "up"
}
```

> Tip: alternatively, you can use [Nodemon](https://www.npmjs.com/package/nodemon) to automatically reload the server during development whenever a file changes, making the development experience much better.

## Scripts

```bash
npm install # Install the dependencies
npm lint    # Lint src files using eslint to ensure a code styling and find code smells.
            # This command runs automatically before each commit.
npm start   # Start the application
npm run tdd # Run the test suit in watch mode (automatically runs on code change)
npm test    # Run the test suit with coverage
            # This command runs automatically before each push.
```

## License

[MIT](LICENSE)
