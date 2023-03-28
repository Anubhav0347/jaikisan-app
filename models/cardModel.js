const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
  {
    cardNumber: String, //Auto_increment e.g: C001
    cardType: String, // [REGULAR/SPECIAL]
    customerName: String,
    status: String, //[ACTIVE/INACTIVE] Default: ACTIVE
    vision: String,
    customerID: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Card", cardSchema);
