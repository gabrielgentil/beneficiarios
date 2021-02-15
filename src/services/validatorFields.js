const APIError = require("../errors/APIError");

const validationService = () => {
  const validar = (campos, body) => {
    const validacao = [];
    campos.forEach((campo) => {
      if (Array.isArray(campo)) {
        let valido = false;

        for (let index = 0; index < campo.length; index += 1) {
          const elemento = campo[index];

          if (body[elemento] !== undefined) {
            valido = true;
          }
        }

        if (!valido) {
          validacao.push(campo);
        }
      } else if (body[campo] === undefined) {
        validacao.push(campo);
      }
    });

    if (validacao.length > 0) {
      throw new APIError(
        "Alguns campos obrigatórios não foram informados.",
        400,
        validacao
      );
    }
  };

  return {
    validar,
  };
};

module.exports = validationService;
