
const leaderboardModel = require("../model/leaderboard.model");

const getLeaderBoard = async (req, res) => {
    try {
        let leaderboardData = await leaderboardModel.find();
        res.status(200).send(leaderboardData);
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}


const postLeaderboard = async (req, res) => {
    try {
        let newLeaderboardUser = leaderboardModel(req.body);
        await newLeaderboardUser.save();
        res.status(200).send({ message: "user Added Successfull" })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}


module.exports = { getLeaderBoard, postLeaderboard }