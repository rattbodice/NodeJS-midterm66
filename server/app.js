let express = require('express');
let bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

require('./routes')(app);

app.get('/test',function (req,res){
    res.send("test");
})

let port = 8081;
app.listen(port,()=>{
    console.log("Server is running on port : "+port);
})