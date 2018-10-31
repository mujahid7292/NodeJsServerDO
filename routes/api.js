const express = require('express');
const router = express.Router();

router.get('/user',(req,res)=>{
    res.send({Type:"GET"})
});

router.post('/user',(req,res)=>{
    res.send({Type:"POST"})
});

router.put('/user',(req,res)=>{
    res.send({Type:"PUT"})
});

router.delete('/user',(req,res)=>{
    res.send({Type:"DELETE"})
});

module.exports = router;