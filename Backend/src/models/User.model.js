const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema(
    {
        firstName: {type: String, required: true},
        secondName: {type: String, required: true},
        surName: {type: String, required: true},
        secondsurName: {type: String, required: true},
        sexo: {type: String, required: true},
        dia: {type: Number, required: true},
        mes: {type: Number, required: true},
        age: {type: Number, required: true},
        email: {type: String, required: true},
        user: {type: String, required: true},
        password: {type: String, required: true},
        isActive: {type: Boolean, default: true},
        image: {type: String, required: false},
        description: {type: String, required: false},
        phone: {type: Number, required: false},

        
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('User', userSchema)