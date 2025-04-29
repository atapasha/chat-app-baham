const express = require('express');
const cors = require('cors')
const app = express()

require('dotenv').config()


const connectDB = require('./config/connectDB')

const router = require('./routes/index')




app.use(cors({

    origin: process.env.FRONTEND_URL,
    credentials: true
}))
const PORT = 8580;


app.get('/', (request, response) => {
    response.json({
        message: "server is ddddddddddddddd"
    })
})


//api endpoints

app.use('/api', router)



connectDB().then(() => {
    app.listen(PORT, console.log('Server is running ' + PORT))
})




