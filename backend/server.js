import dotenv from "dotenv";
dotenv.config();
import app from "./src/middleware/middleware.js";
import router from "./src/routes/routes.js";
import connectDB from "./src/config/db.js";

connectDB();
const port = process.env.PORT || 5000;

// Routes
app.use("/", router);

// Start server
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
