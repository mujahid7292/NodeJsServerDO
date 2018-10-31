var express = require('express');
var router = require('./routes/api')

//Set up express app
var app = express();

//Use router middleware
app.use('/api',router)


app.get('/', (request,response)=>{
    response.send('Hello World');
});

app.set('port',(process.env.Port || 80));

app.listen(app.get('port'),()=>{
    console.log("Node App Is Running At LocalHost: " +app.get('port'));
})