const express = require("express");
const  createDestination = require("../controllers/destinationController");

const router = express.Router();

// POST => create a destination
router.post("/", createDestination);
module.exports = router;
