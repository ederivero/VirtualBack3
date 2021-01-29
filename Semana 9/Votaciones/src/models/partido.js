const { DataTypes } = require("sequelize");

const partido_model = (conexion) => {
  const partido = conexion.define(
    "partidos",
    {
      partido_id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      partido_img_partido: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          isUrl: true,
        },
      },
      partido_img_candidato: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          isUrl: true,
        },
      },
      partido_nombre: {
        type: DataTypes.STRING(30),
        allowNull: false
      }
    },
    {
      tableName: "t_partido",
      timestamps: false,
    }
  );
  return partido;
};

module.exports = partido_model;
