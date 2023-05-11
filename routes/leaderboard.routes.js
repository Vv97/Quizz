const { Router } = require("express");
const { getLeaderBoard, postLeaderboard } = require("../controller/leaderboard.controller");
const leaderboardRouter = Router();

// get leaderboard data
leaderboardRouter.get("/", getLeaderBoard)

// add a data in leaderboard 
leaderboardRouter.post("/", postLeaderboard)


module.exports = leaderboardRouter;