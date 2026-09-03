import express from "express";
const app = express();
app.use(express.json());

app.post("/", (req, res) => {
  res.json({ message: "Signup successful", user: req.body });
});

app.listen(3000, () => console.log("Backend running on port 3000"));
