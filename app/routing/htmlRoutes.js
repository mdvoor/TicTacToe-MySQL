var path = require('path');
var mysql = require('mysql');
var fs = require('fs');

var connection = mysql.createConnection({
host: "localhost",
user: "root",
port: "3306",
password: "",
database: "ticTacTerror"
});

var htmlRoutes = require('express').Router();
//serves homepage
htmlRoutes.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
//serves signIn page
htmlRoutes.get('/signIn', function (req, res) {
    connection.query('SELECT user_name, won FROM game_history ORDER BY won DESC LIMIT 1',
        function(err,result){
            if(err) throw err;
            var userName = `<h4 class="mostWins hidden"><span class="champName">${result[0].user_name}</span> is the current champion with <span class="winner">
            ${result[0].won}</span> wins!</h4>`
        
            fs.readFile(path.join(__dirname, "../public/signIn.html"),'UTF-8',function(err,html){
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(html +`${userName}` )
            })
        })
});

//serves assets and links
htmlRoutes.get('/images/:image', function(req,res){
    res.sendFile(path.join(__dirname, `../public/images/${req.params.image}`));
});
htmlRoutes.get('/css/:css', function(req,res) {
    res.sendFile(path.join(__dirname, `../public/css/${req.params.css}`));
});
htmlRoutes.get('/javascript/:javascript', function(req,res){
    res.sendFile(path.join(__dirname, `../public/javascript/${req.params.javascript}`));
});


module.exports = htmlRoutes;