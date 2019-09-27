const express = require("express");
const router = express.Router();

const TweetModel = require('../models/Tweets.js');

router.get("/", (req,res) => {
    TweetModel.find({}).then(myItems => res.render('index', { myItems }))
})
router.get("/new", (req, res) => {
    res.render('new');
})

router.post('/', (req, res) => {
    TweetModel.create(req.body)
    .then(myNewItem => {
        res.redirect('/');
    })
})
router.get('/edit/:id', (req, res) => {
    TweetModel.findOne({_id: req.params.id}).then(instance => {
        res.render("edit", { instance })
    })
})

router.get("/:id", (req,res) => {
    TweetModel.findOne({ _id: req.params.id}).then(myItems => res.render('show', {myItems}));
})



module.exports = router;