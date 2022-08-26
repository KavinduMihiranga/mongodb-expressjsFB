const express=require('express')
const app=express()
const router=express.Router()

const Post=require('../models/posts.modules')

app.use(express.json)

router.get('/',async(req,res)=>{
    try {
        const post=await Post.find()
        res.json(post)
    } catch (err) {
        res.send('err :'+err)
    }
})

router.get('/:id',async(req,res)=>{
    try {
      const post=await Post.findById(req.params.id)
      res.json(post)
    } catch (err) {
      res.send('Err: '+err)
    }
  })

  router.post('/',async(req,res)=>{
    const post=new Post({
     id:req.body.id,
     user_id:req.body.user_id,
     date:req.body.date,
     time:req.body.time,
     title:req.body.title,
     body:req.body.body
    })
    try {
     const response=await post.save()
     // res.send(response)
     res.json(response)
    } catch (err) {
     res.send('Err :' + err)
    }
 })
 
 router.delete('/:id',async(req,res)=>{
  try {
    const post = await Post.findById(req.params.id)
    const response=await post.remove()

    res.json(response)
  } catch (err) {
   res.send('Err: '+err)
  }
})

router.put('/:id',async(req,res)=>{
  try {
      const post=await Post.findById(req.params.id)
      post.user_id=req.body.user_id
      post.date=req.body.date
      post.time=req.body.time
      post.title=req.body.title
      post.body=req.body.body
    
      const response=await post.save()
      res.json(response)
  } catch (err) {
      res.send('err: '+err)
  }
})


module.exports=router