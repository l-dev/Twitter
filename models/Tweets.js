const mongoose = require("../db/connection");

const TwitterSchema = new mongoose.Schema({
    text: String,
    user: String,
    likes: Number,
    date: Date,
    length: Boolean
})


const TweetModel = mongoose.model("TweetModel", TwitterSchema);

module.exports = TweetModel;

//text User Likes Date Length