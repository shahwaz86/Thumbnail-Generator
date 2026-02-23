const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const cors = require("cors");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user.routes");
const thumbnailRouter = require("./routes/thumbnail.routes");

connectDB();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({
  origin: ["http://localhost:5173", "https://thumbnail-generator-kappa.vercel.app"], // Adjust the origin as needed
  credentials: true,
  
}
));

app.get("/", (req,res) =>{
    res.send("API is running");
});

app.use("/api/user", userRouter);
app.use("/api/thumbnail", thumbnailRouter);


app.listen(PORT, () =>{
    console.log(`listening on the port ${PORT}`);
})