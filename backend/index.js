const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // To load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task.route");

// MongoDB Atlas connection URI from environment variable
const uri = process.env.MONGO;

// Connect to MongoDB Atlas using Mongoose
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Allow all origins (not recommended for production)
app.use(cors());

// Or allow specific origin (replace 'http://localhost:3000' with your frontend URL)
app.use(cors({ origin: 'http://localhost:3000' }));

const db = mongoose.connection;

// Connection event handlers
db.once("open", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});


// Middleware
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Start Express server
app.listen(port, () => {
  console.log("Server is up on the port: " + port);
});
