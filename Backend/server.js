const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();

app.use(cors());
app.use(express.json());

const uri ="mongodb://u25061845_db_user:W070CwJx4o7yPgSQ@ac-mnxqrrb-shard-00-00.ezwitvg.mongodb.net:27017,ac-mnxqrrb-shard-00-01.ezwitvg.mongodb.net:27017,ac-mnxqrrb-shard-00-02.ezwitvg.mongodb.net:27017/?ssl=true&replicaSet=atlas-f6xmh6-shard-0&authSource=admin&appName=pictoradb"
const client = new MongoClient(uri);

let db;

async function connectDB() {
  try {
    await client.connect();

    console.log("Connected to MongoDB!");

    db = client.db("pictoradb");

  } catch (error) {
    console.error(error);
  }
}

connectDB();

app.listen(3000, () => {
console.log("Backend running on port 3000");
});

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});


app.get("/api/posts", async (req, res) => {
  try {
    const posts = await db
      .collection("posts")
      .find({})
      .toArray();

    res.json(posts);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});


app.get("/api/users", async (req, res) => {
  try {
    const users = await db
      .collection("users")
      .find({})
      .toArray();

    res.json(users);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});


app.get("/api/users/:id", async (req, res) => {

  try {

    const user = await db
      .collection("users")
      .findOne({
        _id: req.params.id
      });

    res.json(user);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
});


app.post("/api/signup", async (req, res) => {

  try {

    await db.collection("users").insertOne(req.body);

    res.json({
      message: "Signup successful"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});


app.post("/api/signin", async (req, res) => {

  try {

    const user = await db.collection("users").findOne({
      username: req.body.username,
      password: req.body.password
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid login"
      });
    }

    res.json({
      message: "Login successful",
      user
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});


app.post("/api/posts", async (req, res) => {

  try {

    await db.collection("posts").insertOne(req.body);

    res.json({
      message: "Post created"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});


app.delete("/api/posts/:id", async (req, res) => {

  try {

    await db.collection("posts").deleteOne({
      _id: req.params.id
    });

    res.json({
      message: "Post deleted"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});

app.get("/api/posts/:id", async (req, res) => {
  try {

    const post = await db
      .collection("posts")
      .findOne({
        _id: req.params.id
      });

    res.json(post);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
});

app.put("/api/posts/:id", async (req, res) => {
  try {

    await db.collection("posts").updateOne(
      {
        _id: req.params.id
      },
      {
        $set: req.body
      }
    );

    res.json({
      message: "Post updated"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
});


app.get("/api/albums", async (req, res) => {
  try {

    const albums = await db
      .collection("albums")
      .find({})
      .toArray();

    res.json(albums);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
});

app.post("/api/albums", async (req, res) => {
  try {

    await db.collection("albums").insertOne(req.body);

    res.json({
      message: "Album created"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
});


app.put("/api/albums/:id", async (req, res) => {
  try {

    await db.collection("albums").updateOne(
      {
        _id: req.params.id
      },
      {
        $set: req.body
      }
    );

    res.json({
      message: "Album updated"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
});

app.delete("/api/albums/:id", async (req, res) => {
  try {

    await db.collection("albums").deleteOne({
      _id: req.params.id
    });

    res.json({
      message: "Album deleted"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
});


app.get("/api/friendRequests", async (req, res) => {
  try {

    const requests = await db
      .collection("friendRequests")
      .find({})
      .toArray();

    res.json(requests);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
});


app.post("/api/friendRequests", async (req, res) => {
  try {

    await db.collection("friendRequests").insertOne(req.body);

    res.json({
      message: "Friend request sent"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
});


app.put("/api/friendRequests/:id", async (req, res) => {
  try {

    await db.collection("friendRequests").updateOne(
      {
        _id: req.params.id
      },
      {
        $set: {
          status: req.body.status
        }
      }
    );

    res.json({
      message: "Friend request updated"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
});

app.get("/api/comments", async (req, res) => {
  try {

    const comments = await db
      .collection("comments")
      .find({})
      .toArray();

    res.json(comments);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
});


app.post("/api/comments", async (req, res) => {
  try {

    await db.collection("comments").insertOne(req.body);

    res.json({
      message: "Comment added"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
});


app.get("/api/reports", async (req, res) => {
  try {

    const reports = await db
      .collection("reports")
      .find({})
      .toArray();

    res.json(reports);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
});


app.post("/api/reports", async (req, res) => {
  try {

    await db.collection("reports").insertOne(req.body);

    res.json({
      message: "Report submitted"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
});


app.put("/api/users/:id", async (req, res) => {
  try {

    await db.collection("users").updateOne(
      {
        _id: req.params.id
      },
      {
        $set: req.body
      }
    );

    res.json({
      message: "Profile updated"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
});
``




