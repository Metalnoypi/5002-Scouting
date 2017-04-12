var express = require('express')
var app = express()
var path = require('path')

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/Information-Page.html'))
});


app.listen(8080, function(){
  console.log('Scouting Web Launched!')
})
