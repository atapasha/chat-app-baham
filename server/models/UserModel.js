const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'provide name']
    },
    email: {
        type: String,
        requried: [true, 'privide email']
    },


    password: {
        type: String,
        required: [true, 'add passeword']
    },

    profile_pic: {
        type: String,
        default: ""
    },
},
    { timestamps: true }

)



const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel