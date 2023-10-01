const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect('mongodb://0.0.0.0:27017/twitter_Dev');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = connect;
