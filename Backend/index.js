const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const cors = require("cors");
const connectDB = require("./config/db");
const userRouter = require("./routes/user.routes");
const cookieParser = require("cookie-parser");

connectDB();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173", // Adjust the origin as needed
  credentials: true,
  
}
));



app.use("/api/user", userRouter);


app.listen(PORT, () =>{
    console.log(`listening on the port ${PORT}`);
})