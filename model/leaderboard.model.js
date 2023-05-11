const mongoose = require("mongoose");

const leaderboardSchema = mongoose.Schema({
    email: {
        type: String,
        require: true
    },

    score: {
        type: Number,
        require: true
    },

    total: {
        type: Number,
        require: true
    },

    typeQuizz: {
        type: String,
        require: true
    },
},
    {
        versionKey: false
    }
);


const leaderboardModel = mongoose.model("leaderboard", leaderboardSchema);

module.exports = leaderboardModel;