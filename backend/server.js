import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectDB from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // Middleware to parse JSON request bodies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
