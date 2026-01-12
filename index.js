const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "🚀 Express app is running on EC2!",
    time: new Date().toISOString(),
  });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
