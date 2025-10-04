const express = require("express");
const { createDestination, getAllDestinations, getDestinationById } = require("../controllers/destinationController");

const router = express.Router();

// POST => Create a new destination
router.post("/", createDestination);

// GET => Get all destinations
router.get("/", getAllDestinations);

// GET => Get a single destination by ID
router.get("/:id", getDestinationById);

module.exports = router;
