const Destination = require("../models/destinationModel");

// @desc   Create a new destination
// @route  POST /api/destinations
// @access Public
const createDestination = async (req, res) => {
  try {
    const destinationData = req.body;

    // Optional validation
    if (!destinationData.name || !destinationData.country) {
      return res.status(400).json({ message: "Name and Country are required" });
    }

    // Save to database
    const newDestination = await Destination.create(destinationData);

    res.status(201).json({
      success: true,
      message: "Destination created successfully",
      data: newDestination,
    });
  } catch (error) {
    console.error("Error creating destination:", error);
    res.status(500).json({
      success: false,
      message: "Server Error while creating destination",
    });
  }
};

// @desc   Get all destinations
// @route  GET /api/destinations
// @access Public
const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find(); // fetch all documents
    res.status(200).json({
      success: true,
      count: destinations.length,
      data: destinations,
    });
  } catch (error) {
    console.error("Error fetching destinations:", error);
    res.status(500).json({
      success: false,
      message: "Server Error while fetching destinations",
    });
  }
};

// @desc   Get a single destination by ID
// @route  GET /api/destinations/:id
// @access Public
const getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) {
      return res.status(404).json({
        success: false,
        message: "Destination not found",
      });
    }

    res.status(200).json({
      success: true,
      data: destination,
    });
  } catch (error) {
    console.error("Error fetching destination:", error);
    res.status(500).json({
      success: false,
      message: "Server Error while fetching destination",
    });
  }
};

module.exports = { createDestination, getAllDestinations, getDestinationById };
