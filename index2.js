var app = require('express')();
var bodyParser  = require('body-parser');
var cors = require('cors');
var POST = process.env.PORT || 5000;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
app.use(cors());

app.get('/', function (req, res, next) {
  res.send("This is index 1."+ POST );
}); 


var server = app.listen(POST, function(){
  console.log('express is running on port:'+POST);
});