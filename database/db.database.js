const mongoose = require("mongoose");
require("dotenv").config();


const connectDb = async () => {
    try {
        await mongoose.connect(process.env.mongoDbUrl);
        console.log("db is connected");
    } catch (error) {
        console.log(error);
    };
}


module.exports = connectDb;