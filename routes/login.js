const express=require('express')
const app=express()
const router=express.Router()

const Login=require('../models/login.modules')
const userModels = require('../models/user.models')

app.use(express.json)

router.post('/',async(req,res)=>{
    const login= new Login({
        password:req.body.password,
        email:req.body.email
    })
    const pw="kapila$1234"
    const email="kapila1234@gmail.com"
    if(login.password===pw&& login.email===email){
            res.send(pw+email)
    }else{
        res.send(err)
    }
  
})

module.exports=router