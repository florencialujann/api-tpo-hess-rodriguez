require('dotenv').config();
const express = require('express');
const {dbConnection} = require('./src/db/config');

const app = express();
const cors = require("cors");
app.use(cors());
dbConnection();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "Conexion establecida" });
});

//Existe una URI por cada entidad.
app.use("/api/contactos", require("./src/routes/contactos.routes"));
app.use("/api/usuarios", require("./src/routes/usuarios.routes"));

app.listen(process.env.PORT, () =>{
    console.log('App listening on PORT: '+process.env.PORT);
})

module.exports = app;
