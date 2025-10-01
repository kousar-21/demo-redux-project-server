const mongoose = require("mongoose");
// const mongoose = require('mongoose')

const destinationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    continent: { type: String, required: true },
    description: { type: String, required: true },
    avgLivingCost: { type: Number, required: true },
    currency: { type: String, required: true },
    wifiSpeed: { type: Number, required: true },
    coworkingSpaces: { type: Number, default: 0 },
    safetyIndex: { type: Number, default: 0 },
    climate: {
        temperature: { type: Number },
        humidity: { type: Number },
        seasonBest: { type: String },
    },
    visaInfo: {
        visaType: { type: String },
        visaDuration: { type: String },
    },
    image: { type: String },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
},
    { timestamps: true }
);

const Destination = mongoose.model("Destination", destinationSchema)
module.exports = Destination;