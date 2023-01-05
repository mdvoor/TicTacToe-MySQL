var mysql = require('mysql');

var connection = mysql.createConnection({
host: "localhost",
user: "root",
port: "3306",
password: "",
database: "ticTacTerror"
});

var hallOfFame = require('express').Router();

//renders Hall Of Fame Page
hallOfFame.get('/hallOfFame', function (req,res){
    connection.query(
        'SELECT * FROM game_history ORDER BY won DESC LIMIT 5',
        function(err,result){
          if(err) throw err;
          var html = '<!DOCTYPE html>';
              html +='<html lang="en">';
              html +='<head>';
              html +='<title>Tic-Tac-Terror</title>';
              html +='<meta charset="utf-8">';
              html +=' <link type="text/css" rel="stylesheet" href="css/stylesheet.css">';
              html +='</head>';
              html +='<body>';
              html +='<div class="hallwrapper">';
              html += '<div class="hallminiBoard">';
              html += '<div class="hallinnerBoard">';
              html += '<h1 class="hallHeader">HALL OF FAME</h1>';
              html += '<h4 class="hallIntro">TOP FIVE HIGH SCORES</h4>';
              html += '<form action="/scoreHistory" method="GET">'
              html +='<button class="viewAllBtn">VIEW MORE</button><br>';
              html += '</form>'
              html += '<ul class="hallList">';
            for(let i=0;i < result.length;i++){
                html += `<li class='listHeader'><p>${result[i].user_name}</p></li>`;
                html += `<li class='scoreName'><p>${result[i].first_name} ${result[i].last_name} </p></li>`;
                html += "<li class='scoreWon'><p>Won: " + result[i].won + "</p></li>";  
                html += "<li class='scoreLost'><p>Lost: " + result[i].lost + "</p></li>";
                html += "<li class='last'><p>Tied: " + result[i].tied + "</p></li><ul>";
            }//end of for loop
              html +='<a href="/signIn"><button class="newGameBtn">NEW GAME</button><a><br>';
              html +='</div>';
              html +=' </div>';
              html +='</div>';
              html +='</body>';
              html +='</html>';
              res.send(html);
        })//end of connection.query
});//end of get request


module.exports = hallOfFame;