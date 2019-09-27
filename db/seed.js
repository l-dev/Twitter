const TwitterSchema = require('../models/Tweets.js');


const TwitterData = require("./seeds.json")

TwitterSchema.deleteMany({}).then(() => {
    return TwitterSchema.insertMany(TwitterData);
})
.then(() => {
    console.log("We Got Data!!!");
    process.exit();
})