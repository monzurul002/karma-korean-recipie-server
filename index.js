const express = require("express");
const app = express();
const port = 5000;
const cors = require('cors')
app.use(cors())

const chefs = require('./chef.json')

app.get("/", (req, res) => {
    res.send("Welcome to karma")
})

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    const chef = chefs.find(chef => parseInt(chef.id) === id);
    res.send(chef);

});


app.listen(port, () => {
    console.log("server is running");
})