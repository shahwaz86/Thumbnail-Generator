const jwt = require("jsonwebtoken");

const genToken = (userId) => {
    const token = jwt.sign({userId}, process.env.SECRETKEY, {expiresIn: "7d"});
    
    console.log(`generated token ${token}` );
    return token;
}

module.exports = genToken;