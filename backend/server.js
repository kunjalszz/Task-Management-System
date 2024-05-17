import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes/routes.js";
import bodyparser from 'body-parser'
import { errorHandler } from "./middleware/errorHandler.js"

const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}));

dotenv.config();

const PORT = process.env.PORT || 5000;


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true, // Deprecated, can be removed
  useUnifiedTopology: true // Deprecated, can be removed
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err.message);
  process.exit(1);
});

// Use routes for defining API endpoints
app.use("/", routes);
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
