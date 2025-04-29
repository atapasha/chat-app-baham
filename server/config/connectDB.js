const mongoose = require('mongoose')

async function connectDB() {

    try {
        // اتصال به MongoDB لوکال
        await mongoose.connect("mongodb://localhost:27017/chat-app", { useNewUrlParser: true, useUnifiedTopology: true });

        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log("Connected to DB")
        })
        connection.on('error', (error) => {
            console.log("Something went wrong while connecting to DB", error)
        })
    } catch (error) {
        console.log("Something went wrong with the DB connection", error)
    }
}

module.exports = connectDB;
