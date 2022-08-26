const express=require('express')
const app=express()
const router=express.Router()

const User=require('../models/user.models')

app.use(express.json)

router.get('/',async(req,res)=>{
    try {
        const user=await User.find()
        res.json(user)
    } catch (err) {
        res.send('err :'+err)
    }
})

router.get('/:id',async(req,res)=>{
    try {
      const user=await User.findById(req.params.id)
      res.json(user)
    } catch (err) {
      res.send('Err: '+err)
    }
  })

  router.post('/',async(req,res)=>{
    const user=new User({
     id:req.body.id,
     first_name:req.body.first_name,
     surname:req.body.surname,
     gender:req.body.gender,
     date_of_birth:req.body.date_of_birth,
     password:req.body.password,
     phone_number:req.body.phone_number,
     email:req.body.email
    })
    try {
     const response=await user.save()
     // res.send(response)
     res.json(response)
    } catch (err) {
     res.send('Err :' + err)
    }
 })
 
 router.delete('/:id',async(req,res)=>{
  try {
    const user = await User.findById(req.params.id)
    const response=await user.remove()

    res.json(response)
  } catch (err) {
   res.send('Err: '+err)
  }
})

router.put('/:id',async(req,res)=>{
  try {
      const user=await User.findById(req.params.id)
      user.first_name=req.body.first_name
      user.surname=req.body.surname
      user.gender=req.body.gender
      user.date_of_birth=req.body.date_of_birth
      user.password=req.body.password
      user.phone_number=req.body.phone_number
      user.email=req.body.email

      const response=await user.save()
      res.json(response)
  } catch (err) {
      res.send('err: '+err)
  }
})


module.exports=router