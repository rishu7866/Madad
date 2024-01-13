const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
app.use(cookieParser())
const router = express.Router();
const bcrypt = require('bcrypt');
require("./conn");
const User = require("./userSchema");
const Volunteer = require("./userSchemaVol");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
router.post("/signup", async(req, res) => {
    const {
        Fname,
        Gender,
        Mob,
        Email,
        Pass,
        Cpass
    } = req.body;
    if (!Fname ||
        !Gender ||
        !Mob ||
        !Email ||
        !Pass ||
        !Cpass
    ) {
        res.status(422).json({ error: "empty field" });
        return console.log("empty field");
    }
    const hashedPassword = await bcrypt.hash(Pass, 10);
    const hashedCpassword = await bcrypt.hash(Cpass, 10);

            const user = new User({
                Fname,
                Gender,
                Mob,
                Email,
                Pass:hashedPassword,
                Cpass:hashedCpassword,
            });

            await user.save();

            res.status(201).json({ message: "Successfully Registered as Donar!!" });
            console.log("Successfully Registered as Donar!!");
    } 
);
router.post("/volunteer", async(req, res) => {
    const {
        Fname,
        Gender,
        Mob,
        Email,
        Country,
        State,
        City,
        Pass,
        Cpass
    } = req.body;
    if (!Fname ||
        !Gender ||
        !Mob ||
        !Email ||
        !Country ||
        !State ||
        !City ||
        !Pass ||
        !Cpass
    ) {
        res.status(422).json({ error: "empty field" });
        return console.log("empty field");
    }
    const hashedPassword = await bcrypt.hash(Pass, 10);
    const hashedCpassword = await bcrypt.hash(Cpass, 10);
            const uservol = new Volunteer({
                Fname,
                Gender,
                Mob,
                Email,
                Country,
                State,
                City,
                Pass:hashedPassword,
                Cpass:hashedCpassword,
            });

            await uservol.save();

            res.status(201).json({ message: "Volunteer registered successfully" });
            console.log("Volunteer registered successfully");
    } 
);
// router.get("/postview",async (req, res) => {
//     try{
//      await User.find({}).then(data=>{
//         res.send({status:"Ok",data:data})
//      })
//     }catch(error){
//      res.send({status:"Cant get Data"})
//     }
//  });

module.exports = router;