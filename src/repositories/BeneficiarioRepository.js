const { beneficiarioModel } = require("../models");

module.exports = {
  async get() {
    return await beneficiarioModel.find({});
  },

  async getById(id) {
    return await beneficiarioModel.findById({
      _id: id,
    });
  },

  async beneficiarioJaCadastrado(cpf) {
    return await beneficiarioModel.findOne({ cpf });
  },

  async post(fields) {
    return await beneficiarioModel.create(fields);
  },

  async put(fields, id) {
    return await beneficiarioModel.findOneAndUpdate({ _id: id }, fields);
  },

  async delete(id) {
    return await beneficiarioModel.findOneAndDelete({ _id: id });
  },
};
