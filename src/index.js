const restify = require("restify");
require("dotenv").config({ path: `${__dirname}/.env` });
const routes = require("./routes/index");

const server = restify.createServer();

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

routes(server);

server.listen(process.env.PORT, () => {
  console.log("%s listening at %s", process.env.PORT, server.url);
});
