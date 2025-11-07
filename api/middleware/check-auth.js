// https://dev.to/aneeqakhan/how-to-protect-routes-with-jwt-token-in-nodejs-fgk

const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const User = require("../models/user");

const checkAuth = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get token from header
      token = req.headers.authorization.split(" ")[1];

      // verify token
      const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);

      // token created in user_login includes `userId` and `email`
      const id = decoded.userId || decoded.id || decoded.sub;

      // get user from the token
      req.user = await User.findById(id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, no token");
  }
});

module.exports = checkAuth;
