// routes/reviewRoutes.js
const express = require("express");
const router = express.Router();
const { createReview, getReviewsByDestination } = require("../controllers/reviewController");

// POST: Create review
router.post("/", createReview);

// GET: Get reviews by destinationId
router.get("/:destinationId", getReviewsByDestination);

module.exports = router;
