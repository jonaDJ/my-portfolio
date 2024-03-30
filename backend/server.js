import app from "./src/middleware/middleware.js";
import router from "./src/routes/routes.js";

const port = process.env.PORT || 5000;

// Routes
app.use("/", router);

// Start server
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
