require("dotenv").config();
const mongoose = require("mongoose");


const dbConnection = async () =>{
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("DB Online!");
    }
    catch(err) {
        console.error(err);
        throw new Error ("Error en la conexion de la BD");
    }
}

module.exports = {dbConnection};