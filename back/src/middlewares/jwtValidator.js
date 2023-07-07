//Se verifica que el token sea veridico.
require("dotenv").config();
const { response } = require("express");
const jwt = require("jsonwebtoken");

const validateJwt = async (req, res = response, next) => {
  try {
    const jwtValidate = jwt.verify(req.body.jwt, process.env.PRIVATE_KEY);//metodo verify para verificar la validez de la clave
    if (jwtValidate) {
      next();
    } else {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = validateJwt;