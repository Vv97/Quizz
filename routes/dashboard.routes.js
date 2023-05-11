const { Router } = require("express");
const { getDashboard, postDashboard } = require("../controller/dashboard.controller");
const dashboardRouter = Router();


dashboardRouter.get("/", getDashboard)

dashboardRouter.post("/", postDashboard)

module.exports = dashboardRouter;