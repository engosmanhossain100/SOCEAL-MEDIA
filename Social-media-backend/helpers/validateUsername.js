const User = require("../models/userModel");

async function  validateUsername ( userName ) {
  
    let isTrue = false

    do {
        let user = await User.find({ userName})

        if ( user ) {
            userName += (+new Date() * Math.random()).toString().substring(0, 1 )
        } else {
            isTrue = true;
        }

    } while ( isTrue )
    
        return userName;
  
  }

  module.exports = validateUsername