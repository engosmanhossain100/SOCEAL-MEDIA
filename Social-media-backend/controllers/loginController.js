
const User = require("../models/userModel");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const emailValidation = require("../helpers/emailValidation");
const validateLenghth = require("../helpers/validateLenghth");


let loginController = async (req,res) =>{
    
    const { email, password } = req.body;

    let findUser = await User.findOne({ email: email});

    if (!emailValidation(email)) {
        return res.status(401).json({ 
          message : `Invalid Email`
      })
      }
      
      if (!validateLenghth(password,8,40)) {
        return res.status(401).json({ 
          message : `Password Length minimum 8 `
      })
    }

    if(findUser){
        bcrypt.compare(password, findUser.password, function(err, result) {

            var token = jwt.sign({ id: findUser._id, email:findUser.email }, process.env.JWT_PASS, { expiresIn: "24h" });

            if (result) {
                return res.status(200).json({
                    id: findUser._id,
                    name : findUser.userName,
                    profilePic : findUser.profilePic,
                    fName : findUser.fName,
                    lName : findUser.lName,
                    token : token,
                    email : findUser.email,
                    // message : `Login Successfully`,
                })
            } else {
                return res.status(401).json({
                    message : `Invalid Email & password`
                })
            }
        });
    }else{
        return res.status(401).json({
            message : `Invalid Email & password`
        })
    }
    }

module.exports = loginController;