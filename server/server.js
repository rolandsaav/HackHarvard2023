const express = require("express");
const userRouter = require('./routes/user');  // Adjust the path based on your directory structure
const activityRouter = require('./routes/getActivities');  // Adjust the path based on your directory structure

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.use("/user", userRouter);
app.use("/activities", activityRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the jungle!");
});

app.get('/test', (req, res) => {
  res.send('Test route');
});

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});
