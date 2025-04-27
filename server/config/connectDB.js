const mongoose = require('mongoose')

async function connectDB() {

    try {
        mongoose.connect(process.env.MONGODB_URI)

        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log("Connect to DB")
        })
        connection.on('error', () => {
            console.log("Something to DB",error),
        })
    } catch (error) {
        console.log("Something wrong Connect to DB", error)

    }


}


module.exports=connectDB