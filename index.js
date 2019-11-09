const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
var request = require('request');

app.use(bodyParser.urlencoded({ extended: true }))



app.get('/', function(req, res){
res.sendFile(__dirname + "/index.html")
});

app.post('/', function(req, res){
var crypto = req.body.crypto;
var fiat = req.body.fiat;

var BaseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
var FinalURL = BaseURL +crypto +fiat;

var quantity = req.body.quantity;

var data = JSON.parse(body);
var price = data.last* quantity;
var time = data.display_timestamp;
request(FinalURL, function(error, response, body){




res.write(" The number of " +crypto + " : " + " in terms of "+ fiat+ "Equals to : "+ price  )
res.write( "The time and Date of today is : " + time)
res.send()

});
})


app.listen(port, function(req, res){
  console.log("Okay server is up and running on port no" + port);
});
