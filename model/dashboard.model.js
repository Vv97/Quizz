const mongoose = require("mongoose");

const dashboardSchema = mongoose.Schema({
    creator: {
        type: String,
        require: true
    },

    title: {
        type: String,
        require: true
    },


    typeQuizz: {
        type: String,
        require: true
    },


    description: {
        type: String,
        require: true
    },

    questions: {
        type: [{ title: String, answerOptions: [String], correctOptions: [Number] }]
    }


},
    {
        versionKey: false
    }
);


const dashboardModel = mongoose.model("dashboard", dashboardSchema);

module.exports = dashboardModel;