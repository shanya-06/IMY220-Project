import express from "express";
const app = express();
app.use(express.json());

app.post("/api/signup", (req, res) => {
  res.json({ message: "Signup successful (dummy)", user: req.body });
});

app.listen(5000, () => console.log("Backend running on port 5000"));
