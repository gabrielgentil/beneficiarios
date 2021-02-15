const { beneficiarioDomain } = require("../domain");
const validationService = require("../services/validatorFields");

const BeneficiarioController = {
  async get(req, res, next) {
    try {
      const beneficiarioGet = await beneficiarioDomain.get();
      return res.json({
        data: beneficiarioGet,
        error: null,
        code: 200,
      });
    } catch (e) {
      return next(e);
    }
  },

  async post(req, res, next) {
    try {
      validationService().validar(
        ["nome", "cpf", "rg", "data_nascimento", "tipo_plano_id"],
        req.body
      );

      const beneficiarioPost = await beneficiarioDomain.post(req.body);

      return res.json({
        data: beneficiarioPost,
        error: null,
        code: 200,
      });
    } catch (e) {
      return next(e);
    }
  },

  async getById(req, res, next) {
    try {
      const beneficiarioGetById = await beneficiarioDomain.getById(
        req.params.id
      );
      return res.json({
        data: beneficiarioGetById,
        error: null,
        code: 200,
      });
    } catch (e) {
      return next(e);
    }
  },

  async put(req, res, next) {
    try {
      validationService().validar(
        ["nome", "cpf", "rg", "data_nascimento", "tipo_plano_id"],
        req.body
      );
      const beneficiarioUpdate = await beneficiarioDomain.put(
        req.body,
        req.params.id
      );
      return res.json({
        data: beneficiarioUpdate,
        error: null,
        code: 200,
      });
    } catch (e) {
      return next(e);
    }
  },

  async delete(req, res, next) {
    try {
      const beneficiarioDelete = await beneficiarioDomain.delete(req.params.id);
      return res.json({
        data: beneficiarioDelete,
        error: null,
        code: 200,
      });
    } catch (e) {
      return next(e);
    }
  },
};

module.exports = BeneficiarioController;
