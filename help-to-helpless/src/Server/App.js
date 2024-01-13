const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
dotenv.config( {path: "./config.env"} );
const PORT = process.env.PORT;
const CLIENTPORT = process.env.CLIENT_PORT;
require('./conn');
const User=require('./userSchema')
app.use(cors({
    origin: "http://localhost:3000" || CLIENTPORT,
    credentials: true,
    methods:["GET","POST","PUT","DELETE","PATCH"]
}));
app.use(express.json());
app.use(require('./auth'))
app.get("/", (req, res) => {
    res.send("This Is Home page");
});
app.get("/signup", (req, res) => {
    // res.cookie("Test", 'Rishu');
    res.send("This is SignUp Page");
});
// app.get("/postview",async (req, res) => {
//    try{
//     await User.find({}).then(data=>{
//         res.send({status:"Ok",data:data})
//     })
//    }catch(error){
    
//    }
// });
app.listen(PORT, () => {
    console.log("server is running at port no",process.env.PORT );
})