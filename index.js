const express = require("express");
const app = express();
const port = 5000;
const cors = require('cors')
app.use(cors())
app.get("/", (req, res) => {
    res.send("Welcome to karma")
})



app.listen(port, () => {
    console.log("server is running");
})