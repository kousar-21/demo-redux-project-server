// controllers/reviewController.js
const Review = require("../models/reviewModel");

//  Create a new review
exports.createReview = async (req, res) => {
  try {
    const { destinationId, user, text, date } = req.body;

    if (!destinationId || !user || !text) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    const newReview = await Review.create({ destinationId, user, text, date });

    res.status(201).json({
      success: true,
      message: "Review added successfully",
      data: newReview,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//  Get all reviews for a destination
exports.getReviewsByDestination = async (req, res) => {
  try {
    const { destinationId } = req.params;

    const reviews = await Review.find({ destinationId }).sort({ createdAt: -1 });

    res.status(200).json({ success: true, data: reviews });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
