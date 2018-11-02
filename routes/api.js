
const express = require('express');
const router = express.Router();
const User = require('../models/user.js')
//Here ('../') means go up one folder

router.get('/user/getAllUser',(req,res)=>{
    User.find({}).then((users)=>{
        res.send({
            Type:"GET ALL USER",
            Users:users
        })
    }) 
});

router.get('/user/:objectId',(req,res)=>{
    User.findById(req.params.objectId).then((user)=>{
        res.send({
            Type:"Get Single User",
            User:user
        })
    }) 
});

router.post('/user',(req,res)=>{
    console.log(req.body);
    User.create(req.body).then((user)=>{
        res.send(user);
    }).catch((err)=>{
        res.status(422).send(err);
    });
});

router.put('/user/:objectId',(req,res)=>{
    User.findByIdAndUpdate(req.params.objectId, req.body).then(()=>{
        User.findById(req.params.objectId).then((updatedUser)=>{
            res.send({
                Type:"PUT",
                User:updatedUser
            });
        }).catch((err)=>{
            res.send({err:err})
        });
    });
    
});

router.delete('/user/:objectId',(req,res)=>{
    console.log("To Be Dleted Object: "+ req.params.objectId);
    User.findByIdAndRemove(req.params.objectId).then((deletedUser)=>{
        res.send({
            Type:"DELETE",
            User:deletedUser
        })
    });
    
});

module.exports = router;