var express = require('express');
var app = express();

app.set('port',(process.env.Port || 5000));
app.use(express.static(__dirname + "/public"));

app.get('/', (request,response)=>{
    response.send('Hello World');
});

app.listen(app.get('port'),()=>{
    console.log("Node App Is Running At LocalHost: " +app.get('port'));
})