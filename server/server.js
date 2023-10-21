const express = require("express")

const accRouter = require("./account");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.use("/account", accRouter);
app.get("/", (req, res) => {
    res.send("Welcome to the jungle!");
})
app.get('/test', (req, res) => {
  res.send('Test route');
});
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});
