const mongoose = require('mongoose');
const { Schema } = mongoose;

//En la base de datos siempre se crea en plural.
const UsuariosSchema = new Schema({
    name:String,
    lastname:String,
    email:String,
    password:String
});

const Usuarios = mongoose.model('Usuarios',UsuariosSchema);

module.exports = Usuarios;