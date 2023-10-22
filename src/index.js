const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository= require( './repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(3000, async () =>{
    console.log('listening on port 3000');
    await connect();
    console.log('Mongo connected');

    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({content: ' Tweet with comment',});
    // console.log(tweet);
    // const comment = await Comment.create({content: 'Third Comment'});
    // tweet.comments.push(comment);
    // await tweet.save();  
    // console.log(tweet);
});