const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");
require("dotenv").config();

// user/signup path
const UserRegister = async (req, res) => {
    const { email, password } = req.body;
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            if (hash) {
                let newUser = userModel({
                    email,
                    password: hash
                })

                await newUser.save();
                res.status(201).send({ message: "Signup successfull" })
            } else res.status(400).send({ message: err })
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

// user/signin path
const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userExist = await userModel.findOne({ email });
        if (userExist) {
            bcrypt.compare(password, userExist.password, (err, result) => {
                result ? res.status(201).send({ message: "Login Successful", token: jwt.sign({ userID: userExist._id }, process.env.jwt_key) }) : res.status(400).send({ message: err })
            })

        } else res.status(400).send({ message: "Invalid Credentials" })

    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}


module.exports = { UserRegister, userLogin };