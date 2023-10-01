const express = require('express');
const connect = require('./config/database');
const app = express();

const Tweet = require('./models/tweet');

app.listen(3000, async () =>{
    console.log('listening on port 3000');
    await connect();
    console.log('Mongo connected');
    // const tweet = await Tweet.create({
    //     content: 'Third Tweet',
    //     // userEmail: 'a@b.com'
    // });
    // console.log(tweet);
});