const { beneficiarioRepository } = require("../repositories");
const APIError = require("../errors/APIError");

module.exports = {
  async get() {
    return await beneficiarioRepository.get();
  },

  async post(fields) {
    const beneficioExiste = await beneficiarioRepository.beneficiarioJaCadastrado(
      fields.cpf
    );

    if (beneficioExiste) {
      throw new APIError("Beneficiário já existe!", 400);
    }

    return await beneficiarioRepository.post(fields);
  },

  async put(fields, id) {
    const buscaBeneficiario = await this.getById(id);

    if (!buscaBeneficiario) {
      throw new APIError("Beneficiário não existe!", 400);
    }

    return await beneficiarioRepository.put(fields, id);
  },

  async delete(id) {
    return await beneficiarioRepository.delete(id);
  },

  async getById(id) {
    return await beneficiarioRepository.getById(id);
  },
};
