const controllers = require("../controllers/index");

const router = (server) => {
  server.post("/beneficiario", controllers.post);
  server.get("/beneficiario", controllers.get);
  server.get("/beneficiario/:id", controllers.getById);
  server.put("/beneficiario/:id", controllers.put);
  server.del("/beneficiario/:id", controllers.delete);
};

module.exports = router;
