const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

// modelo de users
const User = require("../models/User.model");
const UserPreferences = require("../models/Preferences.model");
//rutas

router.get("/preferences/by-user/:id", async (req, res) => {
  const userPreferences = await UserPreferences.find({
    created_by: req.params.id,
  });
  res.status(200).json({ userPreferences });
});

router.get("/preferences/all", async (req, res) => {
    const userPreferences = await UserPreferences.find();
    res.status(200).json({ userPreferences });
  });

router.get("/match/:id", async (req, res) => {
  const userPreferences = await UserPreferences.findOne({
    created_by: req.params.id,
  });
  const questionNames = Object.keys(userPreferences._doc).filter(
    (k) =>
      k !== "created_by" &&
      k !== "createdAt" &&
      k !== "updatedAt" &&
      k !== "_id"
  );

  let allPreferences = await UserPreferences.find();

  let usersCompatibles = []

  for (let preference of allPreferences) {
      let sameAnswers = []
    
      for(let question of questionNames){
          if((userPreferences[question] === preference[question]) && (userPreferences.created_by !== preference.created_by)) {
              sameAnswers.push(true)
            }
      }

      if(sameAnswers.length >= 5){
          console.log('compatible')
          let userCompatible = await User.find({_id: preference.created_by})
          delete userCompatible.password
          usersCompatibles = [...usersCompatibles, ...userCompatible]
      }

  }

  res.json({usersCompatibles});
});

router.get("/get-users", async (req, res) => {
  const users = await User.find();
  res.status(200).json({ users });
});

router.post("/preferences", async (req, res) => {
  try {
    const newUserPreferences = new UserPreferences({ ...req.body });
    newUserPreferences.save();

    res.status(201).json({
      status: "Preferencias de Usuario cargadas exitosamente",
      newUserPreferences,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ status: "Error cargando preferencias de usuario" });
  }
});

router.put("/update-preferences/:id", async (req, res) => {
  const id = request.params.id;

  const updated = await UserPreferences.findByIdAndUpdate(id, {
    $set: req.body,
  });

  return res
    .status(201)
    .json({ status: "Preferencia de Usuario actualizadas exitosamente" });
});

router.post("/signup", async (request, response) => {
  try {
    const isExist = await User.find({ email: request.body.email });

    console.log(isExist);

    if (isExist.length > 0) {
      return response
        .status(400)
        .json({ status: "El correo ya fue registrado" });
    }

    //encriptar la contraseña
    const hash = await bcryptjs.hash(request.body.password, 10);

    // crear el usuario
    const newUser = new User({ ...request.body, password: hash });
    newUser.save();

    response
      .status(201)
      .json({ status: "Usuario creado correctamente", newUser });
  } catch (error) {
    console.log(error);
    return response.status(400).json({ status: "Code Error" });
  }
});

router.post("/login", async (request, response) => {
  try {
    // revisar si el user existe

    const user = await User.findOne({ email: request.body.email });

    // revisar si la contraseña es correcta
    if (user) {
      const isPass = await bcryptjs.compare(
        request.body.password,
        user.password
      );

      if (isPass) {
        let data = user._doc; //transformar a un objeto plano JSON
        delete data.password;

        const token = jwt.sign(data, "llaveSecreta");

        return response.status(200).json({ token });
      }

      return response.status(400).json({ status: "Contraseña incorrecta" });
    }

    return response.status(400).json({ status: "Usuario no existe" });
  } catch (error) {
    console.log(error);
    response.status(400).json({ status: "Code Error" });
  }
});

// exportariamos las rutas
module.exports = router;
