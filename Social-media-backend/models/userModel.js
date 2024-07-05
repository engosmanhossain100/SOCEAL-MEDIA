const mongoose = require('mongoose');
const Sehema = mongoose.Schema

const userModel = new Sehema({
    fName : {
        type : String,
        required : true,
        trim : true,
        text : true,
    },
    lName : {
        type : String,
        required : true,
        trim : true,
        text : true,
    },
    userName : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        text : true,
    },
    email : {
        type : String,
        trim : true,
        text : true,
    },
    password : {
        type : String,
        required : true,
    },
    profilePic : {
        type : String,
        default : ""
    },
    cover : {
        type : String,
        trim : true,
    },
    bMonth : {
        type : Number,
        required : true,
        trim : true,
    },
    bDay : {
        type : Number,
        required : true,
        trim : true,
    },
    bYear : {
        type : Number,
        required : true,
        trim : true,
    },
    gender : {
        type : String,
        required : true,
    },
    verified : {
        type : Boolean,
        default : false,
    },
    friends : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "userModel"
        }
    ],
    followers : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "userModel"
        }
    ],
    followers : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "userModel"
        }
    ],
    request : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "userModel"
        }
    ],
    search : [
        {
            user : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "userModel",
                require : true,
                text : true,
            },
            createAt : {
                type : Date,
                require : true,
                default : Date.now,
            }
        }
    ],
    details : {
        bio : {
            type : String,
        },
        othername : {
            type : String,
        },
        job : {
            type : String,
        },
        othername : {
            type : String,
        },
        correntcity : {
            type : String,
        },
        workplace : {
            type : String,
        },
        collage : {
            type : String,
        },
        highschool : {
            type : String,
        },
        hometown : {
            type : String,
        },
        relationshio : {
            type : String,
            enum : ["single", "In A Relashionship", "Is's Complicated", "Married", "Divorced"]
        },
        instagra : {
            type : String,
        },
    },
    savePost : [
        {
            post : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "postModel",
                require : true,
                text : true,
            },
            saveAt : {
                type : Date,
                require : true,
            }
        }
    ]

},
{
    timestamps : true
}
)

module.exports = mongoose.model("userModel", userModel)