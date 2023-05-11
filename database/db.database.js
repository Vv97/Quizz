const mongoose = require("mongoose");
require("dotenv").config();


const connectDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://vishal:pikkachu@cluster0.dk2bl44.mongodb.net/?retryWrites=true&w=majority");
        console.log("db is connected");
    } catch (error) {
        console.log(error);
    };
}


module.exports = connectDb;