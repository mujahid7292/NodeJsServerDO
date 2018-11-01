const express = require('express');
const router = express.Router();

router.get('/user',(req,res)=>{
    res.send({Type:"GET"})
});

router.post('/user',(req,res)=>{
    receivedData = req.body;
    console.log(receivedData);
    res.send({
        Type:"POST",
        name: receivedData.name,
        password:receivedData.password
    })
});

router.put('/user',(req,res)=>{
    res.send({Type:"PUT"})
});

router.delete('/user',(req,res)=>{
    res.send({Type:"DELETE"})
});

module.exports = router;