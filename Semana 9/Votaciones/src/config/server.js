const express = require("express");
const bodyParser = require("body-parser");
const {conexion} = require("./sequelize");
const partido_router = require("../routes/partido");
const elector_router = require("../routes/elector");
module.exports = class Server {
  constructor() {
    this.app = express();
    this.puerto = process.env.PORT || 5000;
    this.CORS();
    this.configurarBodyParser();
    this.rutas();
  }
  CORS() {
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Header", "Content-Type, Authorization");
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      next();
    });
  }
  configurarBodyParser() {
    this.app.use(bodyParser.json());
  }
  rutas() {
    this.app.get("/", (req, res) => {
      res.json({
        ok: true,
        message: "Bienvenido a mi API de elecciones 😂",
      });
    });
    this.app.use("", partido_router, elector_router);
  }
  start() {
    this.app.listen(this.puerto, () => {
      console.log("Servidor corriendo exitosamente!! 😍");
      conexion.sync().then(()=>{
          console.log('Base de datos sincronizada correctamente');
      })
    });
  }
};
