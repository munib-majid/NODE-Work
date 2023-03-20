const jwt = require("jsonwebtoken");
const SECRET_KEY = "notesapi";
const auth = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      //we are acessing the first element
      let user = jwt.verify(token, SECRET_KEY);
      //decrypting the user
      // we are using id that we have send while creating the token to get acess to somethings
      req.userId = user.id;
      // now we have added user id into req too
    } else {
      res.status(401).json({ message: "Unauthorized User" });
    }
    next();
  } catch (error) {
    res.status(401).send(error);
  }
};

module.exports = auth;
