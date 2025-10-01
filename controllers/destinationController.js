const Destination = require("../models/destinationModel");

// @desc   Create a new destination
// @route  POST /api/destinations
// @access Public (you can secure later)
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

module.exports = createDestination;
