//To Start MongoDB in our windows machine run below command in the
//command line.
//"C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe"

var express = require('express');
var router = require('./routes/api');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Set up express app
var app = express();

//Set mongoose property
mongoose.Promise = global.Promise;

const mongooseOptions = { 
    keepAlive: 300000, 
    connectTimeoutMS: 30000,
    useNewUrlParser: true
};
const mongoURL = "mongodb://127.0.0.1:27017/user";

//Connect to MongoDB
mongoose.connect(mongoURL,mongooseOptions);

//Use body-parse middleware
app.use(bodyParser.json()) //this .json() method will parse request body to json format.
//This bodyParser middleware must be attached before router middleware
//Because we need bodyParse in our router. For this body-parser middleware
//in our router we will get access to req.body(). Otherwise we will not
//get access.

//Use router middleware
app.use('/api',router)


app.get('/', (request,response)=>{
    response.send('Hello World');
});

app.set('port',(process.env.Port || 80));

app.listen(app.get('port'),()=>{
    console.log("Node App Is Running At LocalHost: " +app.get('port'));
})