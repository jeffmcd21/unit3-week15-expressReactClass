
// ~ // --------------- DEPENDENCIES --------------- // ~ //
require("dotenv").config();
const mongoose = require("mongoose");

// ~ // --------------- DATABASE CONNECTION --------------- // ~ //
mongoose.connect(process.env.MONGODB_URL)
module.exports = mongoose;

