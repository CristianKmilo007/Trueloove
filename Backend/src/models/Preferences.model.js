const mongoose = require("mongoose");
const { Schema } = mongoose;

//building the Schema
const userPreferences = new Schema(
  {
    Question1: { type: Boolean, required: false },
    Question2: { type: Boolean, required: false },
    Question3: { type: Boolean, required: false },
    Question4: { type: Boolean, required: false },
    Question5: { type: Boolean, required: false },
    Question6: { type: Boolean, required: false },
    Question7: { type: Boolean, required: false },
    Question8: { type: Boolean, required: false },
    Question9: { type: Boolean, required: false },
    Question10: { type: Boolean, required: false },
    Question11: { type: Boolean, required: false },
    Question12: { type: Boolean, required: false },
    Question13: { type: Boolean, required: false },
    Question14: { type: Boolean, required: false },
    Question15: { type: Boolean, required: false },
    Question16: { type: Boolean, required: false },
    Question17: { type: Boolean, required: false },
    created_by: {type: String, required: true},
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//exporting the Schema
module.exports = mongoose.model("UserPreferences", userPreferences);