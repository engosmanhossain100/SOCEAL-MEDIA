const User = require("../models/userModel");
var jwt = require('jsonwebtoken');

let linkvarification = async (req,res) =>{
    
    const { token } = req.body

    var decoded = jwt.verify(token, process.env.JWT_PASS);

    let findUser = await User.findOne({ email: decoded.email});

    if (!findUser.verified) {
        await User.findOneAndUpdate({ email:decoded.email }, {otp: "", verified:true});
        res.send("link milse")
    } else {
       res.send("link mile nai");
    }

    console.log(token);
    console.log(decoded.email);

    console.log(token);
    
}

module.exports = linkvarification;