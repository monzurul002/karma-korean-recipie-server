const express = require("express");
const app = express();
const port = 5000;
const cors = require('cors')
app.use(cors())

const chefs = require('./chef.json')
const recipes = require('./recipes.json')
app.get("/", (req, res) => {
    res.send("Welcome to karma")
})

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const chef = chefs.find(chef => parseInt(chef.id) === id);
    res.send(chef);

});

//category id search

app.get('/recipes/:category_id', (req, res) => {
    const id = req.params.category_id;
    const recipes = recipes.filter(recipe => recipe.category_id === id);
    res.send(recipes)
})


app.listen(port, () => {
    console.log("server is running");
})