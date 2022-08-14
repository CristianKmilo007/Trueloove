const express = require("express")
const dotenv = require('dotenv')
const cors = require("cors")
const morgan = require("morgan")

const app = express()
const port = process.env.PORT || 5000

//Variables de Entorno
dotenv.config()

app.use(morgan("dev"))
app.use(express.json())
app.use(cors())

//Base de datos
require("./database.js")

//Rutas
app.use("/api/users", require("./routes/user"))
app.use("/api/preferences", require("./routes/userPreferences"))

app.listen(port, () => console.log("Ejecutando Api en el puerto", port))