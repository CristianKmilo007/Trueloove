const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

// modelo de users
const User = require("../models/User.model");
const UserPreferences = require("../models/Preferences.model");
//rutas

router.get("/by-user/:id", async (req, res) => {
  const userPreferences = await UserPreferences.find({
    created_by: req.params.id,
  });
  res.status(200).json({ userPreferences });
});

router.get("/all", async (req, res) => {
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

router.post("/createPreferences", async (req, res) => {
  try {
    const newUserPreferences = new UserPreferences(req.body)
    await newUserPreferences.save();

    return res.status(201).json({
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
    $set: req.body});

  return res
    .status(201)
    .json({ status: "Preferencia de Usuario actualizadas exitosamente" });
});

// exportariamos las rutas
module.exports = router;