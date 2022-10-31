 const express = require("express");
 const app = express();
 const mongoose = require("mongoose");
 app.use(express.json());
 const cors = require("cors");
 app.use(cors());
 const bcrypt = require("bcryptjs");

//Code given by MongoDB Database that I, David, created
 const mongoUrl = "mongodb+srv://davidgross461L:Dg123456@cluster0.7qbmil3.mongodb.net/?retryWrites=true&w=majority";
 
 mongoose
    .connect(mongoUrl,{
    useNewUrlParser:true
 })
 .then(()=>{
    console.log("Connected to database");
})
 .catch(e=>console.log(e));
 
 require("./userDetails");

 const User = mongoose.model("UserInfo");

 app.post("/register", async (req,res) => {
    const { fname, lname, email, password} = req.body;
    // const encryptedPassword = await bcrypt.hash(password, 10);
    try{
        const oldUser = await User.findOne({email});
        if(oldUser){
            res.send({status: false, error: "User Exists"});
        }
        await User.create({
            fname, 
            lname, 
            email,
            password,
        });
        res.send({status: true});

    }catch(error){
        res.send({status: false, error: error.toString()});

    }
 });

 app.post("/sign-in", async (req,res) => {
    const {email, password} = req.body;
    try{
        const oldUser = await User.findOne({email});
        if(oldUser){
                res.send({status: "Yay! You logged in"});
                //Create token
        }
        else{
            res.send({status: "Hmm either wrong password or wrong email" })
        }
    }
    catch(error){
        res.send({status: "Uh Oh, an error happened"})
    }



 });
 //This is the port number below (David Gross)
 app.listen(5000,()=>{
    console.log("Server Started");
 });

