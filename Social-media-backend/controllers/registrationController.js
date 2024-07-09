const emailValidation = require("../helpers/emailValidation");
const validateLenghth = require("../helpers/validateLenghth");
const validateUsername = require("../helpers/validateUsername");
const Users = require("../models/userModel");
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
var jwt = require('jsonwebtoken');


let registrationController = async (req, res) => { 

    const {fName,lName,email,userName,password,bMonth,bDay,bYear,gender,verified} = req.body;

    if (!emailValidation(email)) {
        return res.status(401).json({ 
          message : `Invalid Email`
      })
      }

    if (!validateLenghth(fName,3,15)) {
        return res.status(401).json({ 
          message : `Invalid First Length 8 to 15`
      })
    }

    if (!validateLenghth(lName,3,15)) {
        return res.status(401).json({ 
          message : `Invalid First Length 8 to 15`
      })
    }

    if (!validateLenghth(password,8,40)) {
        return res.status(401).json({ 
          message : `Password Length minimum 8 `
      })
    }
    
    if (!validateUsername(userName,10,40)) {
        return res.status(401).json({ 
          message : `Password Length minimum 8 `
      })
    }

      let existingUser = await Users.find({email:email})

      if (existingUser.length > 0) {
        return res.status(401).json({ 
          message : `Email Already Exist`
      })
      } else {

        bcrypt.hash(password, 10, async function(err, hash) {

          let tempUsername= fName + lName
          let finalUsername = await validateUsername(tempUsername)

          jwt.sign({ email: email }, process.env.JWT_PASS , async function(err, token){

            const transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: "engosmanhossain100@gmail.com",
                pass: "vsyl svou qchw dlqw",
              },
            });
      
            const info = await transporter.sendMail({
              from: 'engosmanhossain100@gmail.com', // sender address
              to: email, // list of receiver
              subject: "Hello ✔", // Subject line
              html: `<a href="http://localhost:5173/${token}">Click Hare<a/>` // html body
              
            });
         console.log(token);
          });

        const user = new Users ({
          fName,
          lName,
          email,
          userName : finalUsername,
          password : hash,
          bMonth,
          bDay,
          bYear,
          gender,
          verified
        });

        await user.save();
  
       res.send({
        id : user._id,
        profilePic : user.profilePic,
        fName : user.fName,
        lName : user.lName,
        email : user.email,
        userName : user.userName,
        verified : user.verified,
        message : "Registration Succsefull Please Active to your Email to Start"
       });

        })

      }

}


module.exports = registrationController