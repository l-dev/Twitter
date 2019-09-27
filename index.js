const express = require('express');
const hbs = require('hbs');
const myController = require('./controllers/myItems.js')
const parser = require('body-parser');
const methodOverride = require('method-override')



const app = express();
app.use(parser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.set("view engine", "hbs");
app.listen(2000, () => console.log("Running on port 2000!"));

app.use("/", myController);
