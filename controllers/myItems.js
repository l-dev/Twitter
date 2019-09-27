const express = require("express");
const router = express.Router();
const TweetModel = require('../models/Tweets.js');


// initial home route
router.get("/", (req,res) => {
    TweetModel.find({}).then(myItems => res.render('index', { myItems }))
    .catch(err => console.log(err))
})

//route to new hbs to create new tweet
router.get("/new", (req, res) => {
    res.render('new');
})

//route to post new created tweet
router.post('/', (req, res) => {
    TweetModel.create(req.body)
    .then(myNewItem => {
        res.redirect('/');
    })
})

//route to show to edit existing tweet
router.get("/show", (req,res) => {
    TweetModel.findOne({ _id: req.params.id}).then(myItems => res.render('show', {myItems}));
})

router.get('/edit/:id', (req, res) => {
    TweetModel.findOne({_id: req.params.id})
      .then(instance => {
        res.render("edit", { myItems })
      })
      .catch(err => console.log(err))
  })
  router.put('/:id', (req, res) => {
    TweetModel.findByIdAndUpdate({_id: req.params.id}, req.body, { new: true })
      .then(myItems => {
        res.redirect('/')
      })
      .catch(err => console.log(err))
  });
  router.delete('/:id', (req, res) => {
      TweetModel.findOneAndRemove({ _id: req.params.id}).then(()=> {
          res.redirect('/');
      })
  })
module.exports = router;