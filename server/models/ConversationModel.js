const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({

    text: {
        type: String,
        default: ""
    },

    imageUrl: {
        type: String,
        default: ''
    },
    videUrl: {
        type: String,
        default: ''
    },
    seen: {
        type: 'Boolean',
        default: false
    }
},
    {
        timestamps: true
    })

const conversationSchema = new mongoose.Schema({

    sender: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User'
    },
    receiver: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User'

    },

    messages: [

        {
            type: mongoose.Schema.ObjectId,
            ref: 'Meesage'

        }

    ]
}, {
    timestamps: true
})



const messageModel = mongoose.model('Message', messageSchema)

const ConversationModel = mongoose.model('Conversation', conversationSchema)

module.exports={
    ,
}