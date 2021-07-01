const jwt = require("express-jwt");
//const { secret } = require("../config/config.js");
const { User } = require("../models");

module.exports = authorize;

function authorize() {
  return [
    jwt({ secret: process.env.secret, algorithms: ["HS256"] }),

    async (req, res, next) => {
      console.log(req.user);
      const user = await User.findByPk(req.user.sub);

      if (!user)
        return res
          .status(401)
          .json({ message: "Unauthorized", status: "unauthorized" });

      req.user = user.get();
      next();
    },
  ];
}
