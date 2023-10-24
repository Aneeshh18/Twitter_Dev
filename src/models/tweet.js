const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'Twweet cannot be more than 250 characters']
    },
    hashtags: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hashtags'
    }
}, {timestamps: true}); //timestamps - created at & updated at


const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;