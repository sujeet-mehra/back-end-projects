const mongoose = require('mongoose');

async function dbConnect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/user-auth');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error("Database connection faild");
    }
}

module.exports = dbConnect;