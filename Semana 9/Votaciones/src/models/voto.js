const { DataTypes } = require("sequelize");

const voto_model = (conexion) => {
  const voto = conexion.define("votos", {
    voto_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    voto_fecha: {
      type: DataTypes.DATE,
      defaultValue: Date.now(),
    },
  },{
      tableName: 't_voto',
      timestamps: false
  });
  return voto;
};

module.exports = voto_model;