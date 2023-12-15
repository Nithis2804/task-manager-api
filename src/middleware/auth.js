const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  // console.log("auth middleware");
  // next();
  try {
    const token = req.header("Authorization").replace("Bearer ", ""); //header is requested from postman
    const decoded = jwt.verify(token, "thisismynewcourse");
    const user = await User.findOne({
      //find a user with the id and should have the token
      _id: decoded._id,
      "tokens.token": token,
    });
    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please Authenticate" });
  }
};

module.exports = auth;
