const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String },
    type: { type: String },
    country: { type: String, required: true },
    continent: { type: String, required: true },
    description: { type: String, required: true },
    avgLivingCost: { type: Number, required: true },
    pricePerMonth: { type: Number },
    priceRange: { type: String },
    bookingLink: { type: String },
    totalSeat: { type: Number },
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

    amenities: {
      wifi: { type: Boolean, default: false },
      kitchen: { type: Boolean, default: false },
      ac: { type: Boolean, default: false },
      workspace: { type: Boolean, default: false },
    },

    // you also sent these individual booleans from frontend
    wifi: { type: Boolean, default: false },
    kitchen: { type: Boolean, default: false },
    ac: { type: Boolean, default: false },
    workspace: { type: Boolean, default: false },

    image: { type: String },
    images: [{ type: String }],

    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Destination = mongoose.model("Destination", destinationSchema);
module.exports = Destination;
