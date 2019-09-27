const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Twitter');

mongoose.Promise = Promise;

module.exports = mongoose;