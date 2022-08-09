const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema(
    {
        firstName: {type: String, required: true},
        secondName: {type: String, required: true},
        surName: {type: String, required: true},
        secondsurName: {type: String, required: true},
        hombre: {type: Boolean, required: true, default:false},
        mujer: {type: Boolean, required: true, default:false},
        dia: {type: Number, required: true},
        mes: {type: Number, required: true},
        age: {type: Number, required: true},
        email: {type: String, required: true},
        user: {type: String, required: true},
        password: {type: String, required: true},
        isActive: {type: Boolean, default: true},
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('User', userSchema)