import * as mongoose from 'mongoose';
const elementoSchema = new mongoose.Schema({
    ingrediente: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,

    },
    cantidad: {
        type: Number,
        required: true,
        min: 1,
    },
    unidad: {
        type: String,
        required: true,
        minlength: 5,
    },

});
export const RecetaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        minlength: 5,
        trim: true,
    },
    comensales: {
        type: Number,
        required: true,
        min: 1,
    },
    preparacion: {
        type: Number,
        required: true,
        min: 1,
    },
    coccion: {
        type: Number,
        required: true,
        min: 0,
    },
    descripcion: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
    },
    elementos: [elementoSchema]
});
