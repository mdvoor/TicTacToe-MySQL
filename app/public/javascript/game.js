$(()=>{
//===============================
// GLOBAL VARIABLES FOR GAME
//===============================
let moves = [0,1,2,3,4,5,6,7,8]; //COUNTS AVAILABLE MOVES
let userMoves = []; //COUNTS USER MOVES
let compMoves = []; //COUNTS COMPUTER MOVES
let compWin = []; //COUNTS WINNING COORDINATES FOR COMP
let stop = false; //DISCONTINUES CLICK ABILITY
let stopCount = 0; //TRACKS USER STOPS
let random = false; //TRACKS COMPUTER STRATEGY
let winCount = 0; //USER WIN COUNT
let loseCount = 0; //USER LOST COUNT
let tieCount = 0; //TIE GAME COUNT
let moveCount = 0; //TRACKS MOVES FOR tieCount
let jason = 'jason'; //CHARACTER CLASS VARIABLE
let freddy = 'freddy'; //CHARACTER CLASS VARIABLE

//OFFENSIVE & DEFENSIVE MOVE COORDINATES
const plays = [[0,1,2],[3,4,5],[6,7,8],[2,1,0],[5,4,3],[8,7,6],
              [0,3,6],[1,4,7],[2,5,8],[6,3,0],[7,4,1],[8,5,2],[8,4,0],
              [0,4,8],[6,4,2],[2,4,6],[0,2,1],[3,5,4],[6,8,7],[0,8,4],
              [6,2,4],[6,0,3],[7,1,4],[8,2,5]];

//WINNING COORDINATES
const winPlays = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],
                 [1,4,7],[2,5,8],[0,4,8],[6,4,2]];

//player object
 var currentUser = { 
    firstName : '',
    lastName : '',
    userName : '',
    wins : 0,
    losses : 0,
    tied : 0,
}
//================================
// FUNCTIONS TO CHOOSE CHARACTER
//================================
$('#jasonBtn').on('click',function(event){
    event.preventDefault();
    if($('#firstName').val() !== '' && $('#lastName').val() !== ''){
      choose(jason,freddy);
    }
    if($('#firstName').val() === ''){
      $('#firstName').addClass('required');
    }
    if($('#lastName').val() === ''){
      $('#lastName').addClass('required');
    }
    
});
$('#freddyBtn').on('click',function(event){
    event.preventDefault();
    if($('#firstName').val() !== '' && $('#lastName').val() !== ''){
      choose(jason,freddy);
    }
    if($('#firstName').val() === ''){
      $('#firstName').addClass('required');
    }
    if($('#lastName').val() === ''){
      $('#lastName').addClass('required');
    }
    
});
$('.showGame').on('click',function(){
    //UPDATES PLAYER OBJECT
    currentUser.firstName = $('#firstName').val(),
    currentUser.lastName = $('#lastName').val(),
    currentUser.userName = $('.generatedName').text();
    //CREATES GAME BOARD
    $('.begin').text('CLICK A SQUARE TO BEGIN!');
    $('.game').addClass('flex');
    $('.game').html('<div class="row_1">'+
                    '<div id="0" class="box"></div>'+
                    '<div id="1" class="box"></div>'+
                    '<div id="2" class="box"></div>'+
                    '</div>'+
                    '<div class="row_2">'+
                    '<div id="3" class="box"></div>'+
                    '<div id="4" class="box"></div>'+
                    '<div id="5" class="box"></div>'+
                    '</div>'+
                    '<div class="row_3">'+
                    '<div id="6" class="box"></div>'+
                    '<div id="7" class="box"></div>'+
                    '<div id="8" class="box"></div>'+
                    '</div>')
})
//========================================
// FUNCTION FOR USER MOVES
//========================================
function choose(userClass,compClass){
//modifies GAME BOARD HTML
  if($('#firstName').val() !== ''){
     $('#playerName').text($('#firstName').val());
  }
    $('.mostWins').show();
    $('#signInForm').hide();
    $('#gameBoard').show();

 
    $('#gameBoard').on('click',function(){
      if((stopCount > 0) && (stopCount%2 !== 0)){
        stop = true;
      }else{
        stop = false;
      }
      if(stop === false){ //CONTINUES ONLY IF THERE IS NO WINNER
          let pick = event.target.getAttribute('class');
          if(pick === "box"){ //ALLOWS USER TO CLICK "box" CLASS ONLY
            random = false;
            event.target.setAttribute('class',`box ${userClass}`);
            let idNumber = parseInt(event.target.getAttribute('id'));
            let indexNum = moves.indexOf(idNumber);
            moves.splice(indexNum,1);
            userMoves.push(idNumber);
            compMoves.push(idNumber);
            moveCount = (moveCount + 2);
            stopCount++;
            updateCount();
            //CREATES VISUAL DELAY IN COMPUTER MOVE
            setTimeout(compChoice,1000,compClass);
            }else{ //RETURNS IF "box" CLASS IS NOT SELECTED
              return;
            }
      }else{ //RETURNS IF THERE IS A WINNER AVAILABLE
        return;
      }
    });
};//end of choose function

//============================================
// FUNCTIONS FOR COMPUTER STRATEGY
//============================================
function compChoice(className){
    let randomNum = Math.floor(Math.random()*moves.length);
    let compPick = moves[randomNum];
//============================================
//  CONDITIONAL TO SHOW WHO WON
//============================================
    //TESTS IF IT IS A TIE GAME
    if(moveCount>=10){ 
            tieCount++;
            currentUser.tied += 1;
            updateCount();
            showScore('TIE GAME');
    }
  //TESTS IF USER HAS WON
  for(let i=0;i<=winPlays.length-1;i++){
    if(userMoves.indexOf(winPlays[i][0])!=(-1) &&
       userMoves.indexOf(winPlays[i][1])!=(-1) &&
       userMoves.indexOf(winPlays[i][2])!=(-1)){
            $(`[id=${winPlays[i][0]}]`).addClass('winColor');
            $(`[id=${winPlays[i][1]}]`).addClass('winColor');
            $(`[id=${winPlays[i][2]}]`).addClass('winColor');
            currentUser.wins += 1;
            stop = true;
            random = true;
            winCount++;
            updateCount();
            setTimeout(showScore,2000,'WINNER');
            return;
    }
  }
  //TESTS IF COMPUTER HAS WON
  for(let i=0;i<=winPlays.length-1;i++){
    if(compWin.indexOf(winPlays[i][0])!=(-1) &&
       compWin.indexOf(winPlays[i][1])!=(-1) &&
       compWin.indexOf(winPlays[i][2])!=(-1)){
            $('#gameBoard').hide();
            $('#scoreBoard').show();
            loseCount++;
            currentUser.losses += 1;
            stop = true;
            random = true;
            updateCount();
            return;
    }
  }
//=============================================
// OFFENSIVE CONDITIONAL STRATEGY FOR COMPUTER
//=============================================
  for(let j=0;j<plays.length-1;j++){
    if(compWin.indexOf(plays[j][0])!=(-1) &&
       compWin.indexOf(plays[j][1])!=(-1) &&
       compMoves.indexOf(plays[j][2])==(-1)){
            $(`[id=${plays[j][2]}]`).addClass(className);
            $(`[id=${plays[j][0]}]`).addClass('winColor');
            $(`[id=${plays[j][1]}]`).addClass('winColor');
            $(`[id=${plays[j][2]}]`).addClass('winColor');
            setTimeout(showScore,2000,'LOSER');
            loseCount++;
            currentUser.losses += 1;
            updateCount();
            stop = true;
            random = true;
            return random;
       }
   }
//=============================================
// DEFENSIVE CONDITIONAL STRATEGY FOR COMPUTER
//=============================================
  for(let k=0;k<=plays.length-1;k++){
    if(userMoves.indexOf(plays[k][0])!=(-1) &&
       userMoves.indexOf(plays[k][1])!=(-1) &&
       compMoves.indexOf(plays[k][2])==(-1)){
            $(`[id=${plays[k][2]}]`).addClass(className);
            moves.splice(moves.indexOf(plays[k][2]),1);
            compMoves.push(plays[k][2]);
            compWin.push(plays[k][2]);
            stopCount++;
            random = true;
            return random;
        }
    }
//===============================================
// RANDOM MOVE CONDITIONAL STRATEGY FOR COMPUTER
//===============================================
   if(random===false){//TEST IF RANDOM MOVE IS NEEDED
      if(userMoves.indexOf(4)===(-1) && compMoves.indexOf(4)===(-1)){
            //OFFENSIVE MOVE TO CHOOSE CENTER SQUARE
            $('#4').addClass(className);
            moves.splice(moves.indexOf(4),1);
            compMoves.push(4);
            compWin.push(4);
            stopCount++;
            updateCount();
            return; 
      }else{ //SELECTS RANDOM MOVE FOR COMPUTER
            $(`[id=${compPick}]`).addClass(className);
            moves.splice(randomNum,1);
            compMoves.push(compPick);
            compWin.push(compPick);
            stopCount++;
            updateCount();
            return;
      }
    };
};//end of compChoice function

//====================================
// SCORING FUNCTIONS
//====================================

//UPDATES SCOREBOARD
function updateCount(){
    $('.winCount').text(winCount);
    $('.loseCount').text(loseCount);
    $('.tieCount').text(tieCount);
};

//HIDES GAMEBOARD AND SHOWS SCOREBOARD
function showScore(msg){
  $('.mostWins').hide();
    $('#gameBoard').hide();
    $('.scoreHeader').text(msg);
    $('#scoreBoard').show();
};

//RESETS THE GAME BOARD FOR NEW GAME
$('.playAgain').on('click',()=>{
        $('.box').removeClass(jason);
        $('.box').removeClass(freddy);
        $('.box').removeClass('winColor');
        moves = [0,1,2,3,4,5,6,7,8]; 
        userMoves = [];
        compMoves = [];
        compWin = [];
        stop = false;
        stopCount = 0;
        random = false;
        moveCount = 0;
        $('.mostWins').show();
        $('#scoreBoard').hide();
        $('#gameBoard').show();
});
//====================================
// DATABASE FUNCTION
//====================================
$('.hallFame').on('click', ()=>{
  $.post("/signIn", currentUser);
  location.reload(true);
})

});//end of document.ready function

