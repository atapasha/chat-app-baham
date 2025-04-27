const express = require('express');
const cors = require('cors')
const app = express()

require('dotenv').config()


const connectDB = require('./config/connectDB')


app.use(cors({

    origin: process.env.FRONTEND_URL,
    credentials: true
}))
const PORT = process.env.PORT || 8180;


app.get('/', (request, response) => {
    response.json({
        message: "server is ddddddddddddddd"
    })
})


connectDB().then(() => {
    app.listen(PORT, console.log('Server is running ' + PORT))
})




