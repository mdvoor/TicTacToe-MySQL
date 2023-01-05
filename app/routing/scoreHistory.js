var mysql = require('mysql');


var connection = mysql.createConnection({
host: "localhost",
user: "root",
port: "3306",
password: "",
database: "ticTacTerror"
});

var history = require('express').Router();


//renders Score History Page
history.get('/scoreHistory', function(req,res){
    
    connection.query(
        'SELECT * FROM game_history ORDER BY won DESC LIMIT 40',
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
              html +='<div class="scorewrapper">';
              
              
              html += '<h1 class="scoreHeader">SCORE HISTORY</h1>';
              html += '<h4 class="scoreIntro">TOP 40 SCORES</h4>';

              html += '<ul class="hallList">';
            for(let i=0;i < result.length;i++){
                    html += `<li class='listNumber'><p>#${i+1}</p></li>`;
                    html += `<li class='listHeader'><p>${result[i].user_name}</p></li>`;
                    html += `<li class='scoreName'><p>${result[i].first_name} ${result[i].last_name} </p></li>`;
                    html += "<li class='scoreWon'><p>Won: " + result[i].won + "</p></li>";  
                    html += "<li class='scoreLost'><p>Lost: " + result[i].lost + "</p></li>";
                    html += "<li class='last'><p>Tied: " + result[i].tied + "</p></li><ul>";
            }//end of for loop
              html +='<a href="/signIn"><button class="scoreNewGameBtn">NEW GAME</button><a><br>';
              html +='</div>';
             
              
              html +='</body>';
              html +='</html>';
              res.send(html);
        })//end of connection.query
});


module.exports = history;