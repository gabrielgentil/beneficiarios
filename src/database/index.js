const mongoose = require("mongoose");

mongoose
  .connect(`mongodb://mongo/beneficiario`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Db conectado", db.connection.host))
  .catch((err) => console.error(err));

module.exports = mongoose;
