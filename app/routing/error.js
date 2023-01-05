var mysql = require('mysql');

var connection = mysql.createConnection({
host: "localhost",
user: "root",
port: "3306",
password: "",
database: "ticTacTerror"
});

var error = require('express').Router();

//renders 404 error page
error.get('*', function (req, res) {
    var html = '<!DOCTYPE html>';
              html +='<html lang="en">';
              html +='<head>';
              html +='<title>Tic-Tac-Terror</title>';
              html +='<meta charset="utf-8">';
              html +=' <link type="text/css" rel="stylesheet" href="css/stylesheet.css">';
              html +='</head>';
              html +='<body>';
              html += '<div class="wrapper">';
              html += '<div class="miniBoard">';
              html += '<div class="innerBoard">';
              html += '<h1 class="hallHeader">404<br><br>PAGE NOT FOUND</h1>';
              html +='<a href="/"><button class="homeBtn">HOME</button><a><br>';
              html +='</div>';
              html +=' </div>';
              html +='</div>';
              html +='</body>';
              html +='</html>';
              res.send(html);
});

module.exports = error;