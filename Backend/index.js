const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const connectDB = require("./config/db");
const userRouter = require("./routes/user.routes");

connectDB();

// app.get("/" , (req,res) =>{
//     res.send("working fine");
// })
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use("/api/user", userRouter);


app.listen(PORT, () =>{
    console.log(`listening on the port ${PORT}`);
})