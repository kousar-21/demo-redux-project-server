require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

// Import routes
const userRoutes = require("./routes/userRoutes");
const destinationRoutes = require("./routes/destinationRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/destinations", destinationRoutes);
app.use("/api/reviews", reviewRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("API is running on demo server");
});

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});