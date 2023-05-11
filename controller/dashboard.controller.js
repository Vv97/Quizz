
const dashboardModel = require("../model/dashboard.model");


const getDashboard = async (req, res) => {
    try {
        let dashboardData = await dashboardModel.find();
        res.status(200).send(dashboardData);
    } catch (error) {
        res.status(400).send({ message: err.message })
    }
}


const postDashboard = async (req, res) => {
    try {
        let newLeaderboardUser = dashboardModel(req.body);
        await newLeaderboardUser.save();
        res.status(200).send({ message: "user Added Successfull" })
    } catch (error) {
        res.status(400).send({ message: err.message })
    }
}


module.exports = { getDashboard, postDashboard }