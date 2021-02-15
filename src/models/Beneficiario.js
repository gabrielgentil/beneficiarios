const mongoose = require("../database");

const beneficiarySchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  rg: {
    type: String,
    required: true,
  },
  data_nascimento: {
    type: String,
    required: true,
  },
  tipo_plano: {
    type: String,
    required: true,
    enum: ["Basic", "Standard", "Premium"],
  },
  numero_dependentes: {
    type: Number,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Beneficiario = mongoose.model("Beneficiario", beneficiarySchema);

module.exports = Beneficiario;
