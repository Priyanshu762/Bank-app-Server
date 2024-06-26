const express = require("express")

const app = express()



require("dotenv").config();

const transactionRoutes = require('./routes/Transaction')

const database = require("./config/database")

const cookieParser = require("cookie-parser")

const cors = require("cors")

const PORT = process.env.PORT || 4000 ; 

database.connect();

app.use(cookieParser());

app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use("/api/v1/transaction", transactionRoutes );
app.get("/", (req,res)=>{
    return res.json({
        success:true,
        message:"Your server is running..."
    })
})
app.listen(PORT, ()=>{
    console.log(`App is successfully running at port ${PORT}`)
})