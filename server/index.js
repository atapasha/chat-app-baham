const express = require('express');
const cors = require('cors')
const app = express()

require('dotenv').config()

app.use(cors({

    origin: process.env.FRONTEND_URL,
    credentials: true
}))
const PORT = process.env.PORT || 8080;


app.get('/', (request, response) => {
    response.json({
        message: "server is ddddddddddddddd"
    })
})


app.listen(PORT, console.log('Server is running ' + PORT))