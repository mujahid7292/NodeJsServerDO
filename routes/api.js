const express = require('express');
const router = express.Router();
const User = require('../models/user.js')
//Here ('../') means go up one folder

router.get('/user',(req,res)=>{
    res.send({Type:"GET"})
});

router.post('/user',(req,res)=>{
    console.log(req.body);
    User.create(req.body).then((user)=>{
        res.send(user);
    }).catch((err)=>{
        res.status(422).send(err);
    });
});

router.put('/user',(req,res)=>{
    res.send({Type:"PUT"})
});

router.delete('/user',(req,res)=>{
    res.send({Type:"DELETE"})
});

module.exports = router;