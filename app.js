// const express = require('express')
// const customer = require('./routes/customer')
// const item = require('./routes/item')
// const user = require('./routes/user')
// const app = express();

// const port=4000;
// // is we use json object
// app.use(express.json());
// app.use('/customer',customer)
// app.use('/item',item)
// app.use('/users',user)

// app.get('/',(req,res)=>{
//     console.log('get-request-comming!')
//     res.send('get-req-came-for/route')
// })
// app.listen(port,(req,res)=>{
//     console.log(`Express app listening on port ${port}`);
// })



const express = require('express')
const mongoose = require('mongoose')
// const customer = require('./routes/customer')
const user = require('./routes/user')
// const item = require('./routes/item')
const app = express()
const port = 4000

const url = 'mongodb://127.0.0.1/express'

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on("open", () => {
    console.log('MongoDB connected!');
})
app.use(express.json())
// app.use('/customer', customer)
// app.use('/item',  item)
app.use('/users', user)
// app.use('/items',item)
// app.get('/', (req, res) => {
//     console.log('get request comming!');
//     res.send('get req came for / route')
// })
app.listen(port, () => {
    console.log(`app starting on ${port}`);
})