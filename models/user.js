const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create an user schema
const UserSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name field is required"]
    },
    password:{
        type:String,
        required:[true,"Password field is required"]
    }
});


//Create an user model
const User = mongoose.model('user',UserSchema)

//Now we will export this model so that we can use in other file
module.exports = User;
