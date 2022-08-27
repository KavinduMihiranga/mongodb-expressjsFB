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
    try {
      if(login.password===userModels.password&& login.email===userModels.email){
        const response=await post.save()
        req.json("user match")
      }

    } catch (err) {
        res.send('err: '+err)
    }
})

module.exports=router