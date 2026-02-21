const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/user");

const isAuth = asyncHandler(async(req,res,next)=>{
    const token = req?.cookies?.token || req?.headers?.authorization?.split(" ")[1];
    console.log("Token from middleware:", token);   

    if(!token){
        res.status(401);
        throw new Error("unauthorized access");
        
    }

    try{
        const decoded = jwt.verify(token,process.env.SECRETKEY);
        const user = await User.findById(decoded.userId).select("-password");
        req.user = user;
        next();
    }
    catch(err){
        res.status(401);
        throw new Error("unauthorized error");
    }
});

module.exports = {isAuth};