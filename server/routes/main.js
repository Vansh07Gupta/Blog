const express = require('express');
const router = express.Router();
const Post = require('../models/post');



//Routes
router.get('',async (req,res)=>{

    try {
        const data = await Post.find();
        res.render('index',{data})
    } catch (error) {
        console.log(error);
    }
})


router.get('/about',(req,res)=>{
    res.render('about');
})

module.exports = router;