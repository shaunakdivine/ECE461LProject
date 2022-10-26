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
    const encryptedPassword = await bcrypt.hash(password, 10);
    try{
        const oldUser = await User.findOne({email});
        if(oldUser){
            res.send({error: "User Exists"});
        }
        await User.create({
            fname, 
            lname, 
            email,
            password: encryptedPassword,
        });
        res.send({status: "ok"});

    }catch(error){
        res.send({status: "error"});
    }
 });
 //This is the port number below (David Gross)
 app.listen(5000,()=>{
    console.log("Server Started");
 });

// app.post("/post", async(req, res)=>{
//     console.log(req.body);
//     const {data}=req.body;

//     try{
//         if(data == "david"){
//             res.send({status:"ok"})
//         }
//         else{
//             res.send({status: "User Not Found"})
//         }
        
//     }catch(error){
//         res.send({status:"error, try again"})
//     }
// });

// //Integrating the UserDetails JS 
// require("./userDetails");

// const User = mongoose.model("UserInfo");

// app.post("/register", async (req, res) => {
//     const{name, email, mobileNo} = req.body; 
//     try{
//         await User.create({
//             uname: name, 
//             email, 
//             phoneNo: mobileNo, 
//         });
//         res.send({status: "Ok"});
//     } catch(error){
//         res.send({status: "error"});
//     }
// });