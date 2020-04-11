# Sandbox API (mock)

Scaffold a base server application to fastly create your own back-end API for prototyping and mocking during front-end development.

It uses the awesome module [json-server](https://github.com/typicode/json-server).

## Getting started

Install the dependencies

```bash
$ npm install
```

Start the server

```bash
$ npm start
```

You should see a message _"JSON Server is running at port 8080"_.\
Now if you go to http://localhost:8080/status, you'll get

```json
{
  "status": "up"
}
```

## License

[MIT](LICENSE)
