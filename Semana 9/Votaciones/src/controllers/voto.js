const { Voto, VotoCongresal, Elector } = require("../config/sequelize");

const crearVoto = async (req, res) => {
  // Como me deberia mandar el front el body??
  /**
   * {
   *    voto_presidencial: id_partido,
   *    voto_congresal:{
   *        primer_congresista: id_congresista,
   *        segundo_congresista: id_congresista
   *    }
   * }
   */
  let { elector_dni } = req.user;
  const elector = await Elector.findByPk(elector_dni);
  return res.json({
      ok:true
  })
};
module.exports = {
  crearVoto,
};
