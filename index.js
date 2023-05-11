const express = require("express");
const cors = require("cors");
const connectDb = require("./database/db.database");
const userRouter = require("./routes/user.routes");
const leaderboardRouter = require("./routes/leaderboard.routes");
const dashboardRouter = require("./routes/dashboard.routes");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

// default path
app.get("/", (req, res) => {
    res.status(200).send({ message: "welcome" })
});


// user path
app.use("/users", userRouter);

// leaderboard path
app.use("/leaderboard", leaderboardRouter);

// dashboard path
app.use("/dashboard", dashboardRouter);


app.listen(process.env.port, () => {
    connectDb();
    console.log(`server is running at ${process.env.port} port`)
})