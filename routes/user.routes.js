const { Router } = require("express");
const { UserRegister, userLogin } = require("../controller/user.controller");
const userRouter = Router();

userRouter.post("/signup", UserRegister);

userRouter.post("/signin", userLogin);

module.exports = userRouter;