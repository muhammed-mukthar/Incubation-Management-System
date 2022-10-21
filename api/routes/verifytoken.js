const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let authHeader = req.headers.token;
  console.log(req.headers);
  if (authHeader) {
    authHeader=authHeader.replaceAll('"', '')
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        console.log(err,'invalid token');
        res.status(403).json({ authError: true });
      }else{
           console.log("inside");
              next();
      }
    });
  } else {
    return res.status(401).json("you are not authenticated");
  }
};

const verifyAdminToken = (req, res, next) => {
  let authHeader = req.headers.admintoken;
  console.log(req.headers);
  if (authHeader) {
    authHeader=authHeader.replaceAll('"', '')
    console.log(authHeader);
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        console.log(err,'invalid token');
        res.status(403).json({ authError: true });
      }else{
           console.log("inside");
              next();
      }
   
    });
  } else {
    res.status(401).json({ authError: true });
    next();
  }
};

module.exports = {
  verifyToken,
  
  verifyAdminToken,
};
