const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema(
    {
        firstName: {type: String, required: true},
        secondName: {type: String, required: true},
        surName: {type: String, required: true},
        secondsurName: {type: String, required: true},
        sexo: {type: String, required: true},
        FechaNaci: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        isActive: {type: Boolean, default: true},
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('User', userSchema)