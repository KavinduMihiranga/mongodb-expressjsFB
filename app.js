const express = require('express')
const mongoose = require('mongoose')

const user = require('./routes/user')
const posts = require('./routes/posts')
const login = require('./routes/login')

const app = express()
const port = 4000

const url = 'mongodb://127.0.0.1/express'

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on("open", () => {
    console.log('MongoDB connected!');
})
app.use(express.json())

app.use('/users', user)
app.use('/posts', posts)
app.use('/login', login)

app.listen(port, () => {
    console.log(`app starting on ${port}`);
})