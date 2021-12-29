var player1Health = 100;
var player2Health = 100;
let roundCounter = 0;
let lastname;
console.log(localStorage.getItem("lastname"));

let player1Score = 0;
let player2Score = 0;

function shootBtn(){
    var player1Fire =   Math.floor(Math.random() * 5);
    var player2Fire =  Math.floor(Math.random() * 5);
    
    console.log("Player 1 Fire : " +player1Fire);
    console.log("Player 2 Fire : "+ player2Fire);
    
    document.getElementById("player1FireScore").innerHTML=player1Fire;
    
    localStorage.setItem("player1Score","p1FireScore");
    document.getElementById("player2FireScore").innerHTML=player2Fire;

      player1Health = player1Health-player2Fire;
      player2Health = player2Health-player1Fire;
    
      console.log("Player 1 Health : "+player1Health);
      console.log("Player 2 Health : "+player2Health)

       roundCounter++;
       console.log(roundCounter)

      if(player1Health==0){
        document.getElementById("grid-item-9").innerHTML = "Player 2 Won!";
      }
      if(player2Health==0){
        document.getElementById("grid-item-9").innerHTML = "Player 1 Won!";
      }
      if(roundCounter==5){
        document.getElementById("ShootBtn").disabled = true;
        document.getElementById("ShootBtn").innerHTML="Game Over";
        document.getElementById("ShootBtn").style.backgroundColor = "grey";
      }

      if(player1Fire>player2Fire){
        player1Score = player1Score+1;
      }
      if(player2Fire>player1Fire){
        player2Score = player2Score+1;
      }

      localStorage.setItem("lastname",player1Score);

      console.warn("Player 1 Win :" + player1Score)
      console.warn("Player 2 Win :" + player2Score)
      document.getElementById("grid-item-4").innerHTML=player1Score;
      document.getElementById("grid-item-8").innerHTML=player2Score;

      if(player1Score==3){
       
        gameOver("Player 1 Won!")

      }

      if(player2Score==3){
        gameOver("Player 2 Won!")
       
      }

     if(roundCounter==5){
        if(player1Score>player2Score){
          
            gameOver("Player 1 Won!")
            
          }
        
          if(player2Score>player1Score){
            gameOver("Player 2 Won!")
            
          }
          if(player2Score==player1Score){
            gameOver("Match Draw")
            
          }
     } 

     console.log("");
}
function gameOver(playercomment){
  document.getElementById("grid-item-9").innerHTML = playercomment;
  document.getElementById("ShootBtn").disabled = true;
  document.getElementById("ShootBtn").innerHTML="Game Over";
  document.getElementById("ShootBtn").style.backgroundColor = "grey";
}
function resetBtn(){
    location.reload();
    localStorage.clear();

}
