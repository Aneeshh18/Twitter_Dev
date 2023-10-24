const express = require('express');
const connect = require('./config/database');
const app = express();

// const HashtagRepository = require('./repository/hashtag-repository');
// const TweetService = require('./services/tweet-service');

app.listen(3000, async () =>{
    console.log('listening on port 3000');
    await connect();
    console.log('Mongo connected');
    // let service = new TweetService();
    // const tweet = await service.create({
    //     content : 'my #working twitter'
    // });
    // console.log(tweet);  working, uncomment to checking hashtag processing
});