const express = require("express");
const hbs = require("hbs");
const parser = require("body-parser");
const myController = require("./controllers/myItems.js");
const methodOverride = require("method-override");

const app = express();
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "hbs");
app.get(':id', function(req, res){
res.send('id: ' + req.params.id)
});

app.use("/",myController);

app.listen(5000, () => console.log("Running on port 5000!"));

