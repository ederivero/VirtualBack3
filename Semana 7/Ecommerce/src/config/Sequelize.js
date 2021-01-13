const { Sequelize } = require('sequelize');
const almacen_model = require('../models/AlmacenModel');
const cabecera_venta_model = require('../models/CabeceraVentaModel');
const carrito_model = require('../models/CarritoModel');
const categoria_model = require('../models/CategoriaModel');
const detalle_venta_model = require('../models/DetalleVentaModel');
const imagen_model = require('../models/ImagenModel');
const lista_deseo_model = require('../models/ListaDeseoModel');
const producto_model = require('../models/ProductoModel');
const usuario_model = require('../models/UsuarioModel');
// CREATE DATABASE ecommerce_virtual4;
const conexion = new Sequelize(
    "ecommerce_virtual4", "root", "root", {
    host: "127.0.0.1",
    port: "3306",
    dialect: "mysql",
    timezone: "-05:00",
    logging: false,
    dialectOptions: {
        dateStrings: true
    }
}
);
// Se crean las tablas en la base de datos
const Almacen = almacen_model(conexion);
const CabeceraVenta = cabecera_venta_model(conexion);
const Carrito = carrito_model(conexion);
const Categoria = categoria_model(conexion);
const DetalleVenta = detalle_venta_model(conexion);
const Imagen = imagen_model(conexion);
const ListaDeseo = lista_deseo_model(conexion);
const Producto = producto_model(conexion);
const Usuario = usuario_model(conexion);
module.exports = {
    conexion: conexion
}