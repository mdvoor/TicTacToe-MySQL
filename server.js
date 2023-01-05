var express = require("express");
var bodyParser = require("body-parser");
var mysql = require('mysql');

var connection = mysql.createConnection({
host: "localhost",
user: "root",
port: "3306",
password: "",
database: "ticTacTerror"
});
connection.connect(function(err){
    if(err) throw err;
    console.log("Connected to MySql!")
})
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var PORT = process.env.PORT || 8080;

var htmlRoutes = require('./app/routing/htmlRoutes');
app.use('/', htmlRoutes);

var hallOfFame = require('./app/routing/hallOfFame');
app.use('/', hallOfFame);

var history = require('./app/routing/scoreHistory');
app.use('/', history);

var error = require('./app/routing/error');
app.use('/', error);

//posts data to mysql database
app.post('/signIn', function(req,res){
  let user = req.body;
   var query = connection.query(
       'INSERT INTO game_history SET ?',
       {
           first_name : user.firstName,
           last_name : user.lastName,
           user_name : user.userName,
           won : user.wins,
           lost : user.losses,
           tied : user.tied
       }
   )
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});