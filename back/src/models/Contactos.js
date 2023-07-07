const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactosSchema = new Schema({
    name:String,
    telefono:String,
    email:String,
    mensaje:String
});

const Contactos = mongoose.model('Contactos',ContactosSchema);

module.exports = Contactos;