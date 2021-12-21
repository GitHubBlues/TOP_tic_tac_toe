// First splash page
const splSecreen1 = document.querySelector(".splash-page-1");
const splSecreen2 = document.querySelector(".splash-page-2");
const mainScreen = document.querySelector(".main-page");
const spl1Figure1 = document.querySelector(".img-girl-spl1");
const spl1Figure2 = document.querySelector(".img-robot-spl1");
const spl1NextButton = document.querySelector(".button-next-1");
const spl2Avatar1 = document.querySelector(".img-girl-1-spl2");
const spl2Avatar2 = document.querySelector(".img-boy-2-spl2");
const spl2Avatar3 = document.querySelector(".img-boy-1-spl2");
const spl2Avatar4 = document.querySelector(".img-girl-2-spl2");
const spl2NextButton = document.querySelector(".button-next-2");
const winBanner = document.querySelector(".announce-winner");
const playAgainButton = document.querySelector(".button-play-again");
const tieImage1 = document.querySelector(".tie-image-1");
const tieImage2 = document.querySelector(".tie-image-2");

const div1 = document.querySelector(".div-board-1");
const div2 = document.querySelector(".div-board-2");
const div3 = document.querySelector(".div-board-3");
const div4 = document.querySelector(".div-board-4");
const div5 = document.querySelector(".div-board-5");
const div6 = document.querySelector(".div-board-6");
const div7 = document.querySelector(".div-board-7");
const div8 = document.querySelector(".div-board-8");
const div9 = document.querySelector(".div-board-9");

let opponent;
let backup="";
let namePlayer1;
let namePlayer2;
let avatarPlayer1;
let avatarPlayer2;


/* First splash screen */
function spl1NextHandler(){
    splSecreen1.style.display = "none";
    splSecreen2.style.display = "block";
    
    spl2Avatar1.addEventListener('click', selectAvatarHandler);
    spl2Avatar2.addEventListener('click', selectAvatarHandler);
    spl2Avatar3.addEventListener('click', selectAvatarHandler);
    spl2Avatar4.addEventListener('click', selectAvatarHandler);
}    

function selectAvatarHandler(evt){
    spl2Avatar1.classList.remove("selected-avatar");
    spl2Avatar2.classList.remove("selected-avatar");
    spl2Avatar3.classList.remove("selected-avatar");
    spl2Avatar4.classList.remove("selected-avatar");

    spl2Avatar1.classList.remove("selected-avatar-red");
    spl2Avatar2.classList.remove("selected-avatar-red");
    spl2Avatar3.classList.remove("selected-avatar-red");
    spl2Avatar4.classList.remove("selected-avatar-red");

    spl2Avatar1.classList.add("non-selected-avatar");
    spl2Avatar2.classList.add("non-selected-avatar");
    spl2Avatar3.classList.add("non-selected-avatar");
    spl2Avatar4.classList.add("non-selected-avatar");
    
    console.log(evt.target);
    if (evt.target.classList.contains("img-girl-1-spl2")){
        avatarPlayer1= "girl_1";

        spl2Avatar1.classList.remove("non-selected-avatar");
        
        if (backup == ""){
            spl2Avatar1.classList.add("selected-avatar");
        } else {
            spl2Avatar1.classList.add("selected-avatar-red");
        }

    } else if (evt.target.classList.contains("img-boy-2-spl2")){
        avatarPlayer1= "boy_2";

        spl2Avatar2.classList.remove("non-selected-avatar");

        if (backup == ""){
            spl2Avatar2.classList.add("selected-avatar");
        } else {
            spl2Avatar2.classList.add("selected-avatar-red");
        }

    } else if (evt.target.classList.contains("img-boy-1-spl2")){
        avatarPlayer1= "boy_1";

        spl2Avatar3.classList.add("selected-avatar");

        if (backup == ""){
            spl2Avatar3.classList.add("selected-avatar");
        } else {
            spl2Avatar3.classList.add("selected-avatar-red");
        }

    } else if (evt.target.classList.contains("img-girl-2-spl2")){
        avatarPlayer1= "girl_2";  

        spl2Avatar4.classList.add("selected-avatar");

        if (backup == ""){
            spl2Avatar4.classList.add("selected-avatar");
        } else {
            spl2Avatar4.classList.add("selected-avatar-red");
        }
    } 
    
    spl2NextButton.addEventListener('click', spl2NextHandler);
}


/* Second splash screen */
function spl2NextHandler(){

    if (backup == ""){

        namePlayer1 = document.querySelector(".input-box").value;
        if (namePlayer1 === ""){
            namePlayer1 = "Player 1"; 
        }
        document.querySelector(".input-box").value = "";
        

        if (opponent == "notAI"){
        backup = avatarPlayer1;
        
        spl2NextButton.removeEventListener('click', spl2NextHandler);
        
        spl2Avatar1.src = "images/Avatar_girl_1_red.svg";
        spl2Avatar2.src = "images/Avatar_boy_2_red.svg";
        spl2Avatar3.src = "images/Avatar_boy_1_red.svg";
        spl2Avatar4.src = "images/Avatar_girl_2_red.svg";

        document.querySelector(".choose-avatar-text").innerHTML = "Player 2: Choose your avatar";
        
        spl2Avatar1.classList.remove("non-selected-avatar");
        spl2Avatar2.classList.remove("non-selected-avatar");
        spl2Avatar3.classList.remove("non-selected-avatar");
        spl2Avatar4.classList.remove("non-selected-avatar");
        spl2Avatar1.classList.remove("selected-avatar");
        spl2Avatar2.classList.remove("selected-avatar");
        spl2Avatar3.classList.remove("selected-avatar");
        spl2Avatar4.classList.remove("selected-avatar");

        spl1NextHandler()

        } else if (opponent == "AI"){
            let namePlayer2 = "Robot";
            splSecreen2.style.display = "none";
            mainScreen.style.display = "block"; 

            personalizePlayers(namePlayer1, namePlayer2, avatarPlayer1, "Robot");
        }

    } else {
        
        namePlayer2 = document.querySelector(".input-box").value;
        if (namePlayer2 === ""){
            namePlayer2 = "Player 2"; 
        }
        
        document.querySelector(".input-box").value = "";

        avatarPlayer2= avatarPlayer1;
        avatarPlayer1 = backup;
       
        personalizePlayers(namePlayer1, namePlayer2, avatarPlayer1, avatarPlayer2);

        splSecreen2.style.display = "none";
        mainScreen.style.display = "block"; 
    }
}

function personalizePlayers(namePlayer1, namePlayer2, avatarPlayer1, avatarPlayer2){
    
    if (avatarPlayer1=="girl_1"){
        document.getElementById("left-avatar").src = "images/Avatar_girl_1_blue.svg";
    } else if (avatarPlayer1=="girl_2"){
        document.getElementById("left-avatar").src = "images/Avatar_girl_2_blue.svg";
    } else if (avatarPlayer1=="boy_1"){
        document.getElementById("left-avatar").src = "images/Avatar_boy_1_blue.svg"; 
    } else if (avatarPlayer1=="boy_2"){
        document.getElementById("left-avatar").src = "images/Avatar_boy_2_blue.svg"; 
    }   

    if (avatarPlayer2=="girl_1"){
        document.getElementById("right-avatar").src = "images/Avatar_girl_1_red.svg";
    } else if (avatarPlayer2=="girl_2"){
        document.getElementById("right-avatar").src = "images/Avatar_girl_2_red.svg";
    } else if (avatarPlayer2=="boy_1"){
        document.getElementById("right-avatar").src = "images/Avatar_boy_1_red.svg"; 
    } else if (avatarPlayer2=="boy_2"){
        document.getElementById("right-avatar").src = "images/Avatar_boy_2_red.svg"; 
    } else {
        document.getElementById("right-avatar").src = "images/Avatar_robot.svg";  
    }  

    document.getElementById("caption-left-avatar").innerHTML = namePlayer1;
    document.getElementById("caption-right-avatar").innerHTML = namePlayer2;


}

function spl1SelectAvatar(evt){
    if (evt.target.classList == "img-girl-spl1"){
        opponent = "notAI";

        spl1Figure1.classList.add("selected-avatar");
        spl1Figure2.classList.remove("selected-avatar");
        spl1NextButton.addEventListener('click', spl1NextHandler);

    }else if (evt.target.classList == "img-robot-spl1"){
        opponent = "AI";
        
        spl1Figure2.classList.add("selected-avatar");
        spl1Figure1.classList.remove("selected-avatar");
        spl1NextButton.addEventListener('click', spl1NextHandler);

    } 
} 

spl1Figure1.addEventListener('click', spl1SelectAvatar);
spl1Figure2.addEventListener('click', spl1SelectAvatar);




const gameboard = (function () {
    const boarddiv = document.querySelectorAll(".div-gameboard > *");
    

    let boardArray1D = [' ',' ',' ',' ',' ',' ',' ',' ',' '];


    const currentPlayer = function(){
        
        if (opponent == 'AI'){
            // if (turn==player2){
            //     turn = player1;

            // } else {
                  
                for (i=0; i<boarddiv.length; i++){
                    boarddiv[i].removeEventListener('click', putMarkerOnBoard)
                }
                
                turn = player2; 
                const aiMove =  minimax(turn, boardArray1D,0);
                boardArray1D[aiMove.id] = player2.marker;
                gb.drawBoard(boardArray1D);


                if (evaluateWinner(player2)>=0){
                    turn = player1; 
                    foundWinner(evaluateWinner(player2));

                } else {
                    setTimeout( () => {
                        for (i=0; i<boarddiv.length; i++){
                            boarddiv[i].addEventListener('click', putMarkerOnBoard)
                        }}, 500);

                } 
                
                turn = player1; 
 

                
            // }

        } else {
            if (turn == player1){
                turn = player2;
            } else {
                turn = player1;
            }
        }
    }


    const putMarkerOnBoard = function(e){
        turn == player1? marker=player1.marker : marker=player2.marker;
        let winner = -1;
        winBanner.style.display = "none";


        if (e.target.className == 'div-board-1') {
            if (boardArray1D[0] ==' ') {
                boardArray1D.splice(0, 1, marker);
                gb.drawBoard(boardArray1D);
                winner = evaluateWinner(turn); 
                currentPlayer();
                }; 
        } else if (e.target.className == 'div-board-2') {
            if (boardArray1D[1] ==' ') {
                boardArray1D.splice(1, 1, marker);
                gb.drawBoard(boardArray1D);
                winner = evaluateWinner(turn); 
                currentPlayer();
                }; 
        } else if (e.target.className == 'div-board-3') {        
            if (boardArray1D[2] ==' ') {
                boardArray1D.splice(2, 1, marker);
                gb.drawBoard(boardArray1D);
                winner = evaluateWinner(turn); 
                currentPlayer();
                }; 
        } else if (e.target.className == 'div-board-4') {      
            if (boardArray1D[3] ==' ') {
                boardArray1D.splice(3, 1, marker);
                gb.drawBoard(boardArray1D);
                winner = evaluateWinner(turn); 
                currentPlayer();
                }; 
        } else if (e.target.className == 'div-board-5') {  
            if (boardArray1D[4] ==' ') {
                boardArray1D.splice(4, 1, marker);
                gb.drawBoard(boardArray1D);
                winner = evaluateWinner(turn); 
                currentPlayer();
                }; 
        } else if (e.target.className == 'div-board-6') {            
            if (boardArray1D[5] ==' ') {
                boardArray1D.splice(5, 1, marker);
                gb.drawBoard(boardArray1D);
                winner = evaluateWinner(turn); 
                currentPlayer();
                }; 
        } else if (e.target.className == 'div-board-7') {  
            if (boardArray1D[6] ==' ') {
                boardArray1D.splice(6, 1, marker);
                gb.drawBoard(boardArray1D);
                winner = evaluateWinner(turn); 
                currentPlayer();
                }; 
        } else if (e.target.className == 'div-board-8') {
            if (boardArray1D[7] ==' ') {
                boardArray1D.splice(7, 1, marker);
                gb.drawBoard(boardArray1D);
                winner = evaluateWinner(turn); 
                currentPlayer();
                }; 
        } else if (e.target.className == 'div-board-9') {         
            if (boardArray1D[8] ==' ') {
                boardArray1D.splice(8, 1, marker);
                gb.drawBoard(boardArray1D);
                winner = evaluateWinner(turn); 
                currentPlayer();
                };  
        }
        
        let won;

        if (winner >= 0){ 

            foundWinner(winner);

        } else { 
  
            checkEndGame = boardArray1D.findIndex((item) => item ==" ");
            if (checkEndGame == -1){
                for (i=0; i<boarddiv.length; i++){
                    boarddiv[i].removeEventListener('click', putMarkerOnBoard) 
                }
                
                winBanner.style.display = "block";
                playAgainButton.style.display = "block";
                
                winBanner.style.color = "black";
                winBanner.innerHTML = `It's a tie!`; 
                
                tieImage1.style.display = "block"; 
                tieImage2.style.display = "block";                

                playAgainButton.addEventListener("click", playAgainHandler);   

            }
        }
 
        // function playAgainHandler2(){
        //     boardArray1D =[' ',' ',' ',' ',' ',' ',' ',' ',' '];
        //     drawBoard(boardArray1D);
            
        //     playAgainButton.style.display = "none";
        //     playAgainButton.removeEventListener("click", playAgainHandler2);
        //     tieImage1.style.display = "none";
        //     tieImage2.style.display = "none";  

        //     for (i=0; i<boarddiv.length; i++){
        //         boarddiv[i].addEventListener('click', putMarkerOnBoard); 
        //     }

        //     if (turn == player2){
        //         won = document.getElementById("caption-right-avatar").innerHTML;
        //         winBanner.style.color = "rgb(252,64,64)";
        //     } else {
        //         won = document.getElementById("caption-left-avatar").innerHTML;
        //         winBanner.style.color = "rgb(0, 192, 252)";
        //     }
        //     winBanner.innerHTML = `${won} starts`;         
        // }    

    };
 

    const foundWinner = function(winner){            
        winBanner.style.display = "block";
        playAgainButton.style.display = "block";
        

        if (turn == player1){
            won = document.getElementById("caption-right-avatar").innerHTML;
            winBanner.style.color = "rgb(252,64,64)";
        } else {
            won = document.getElementById("caption-left-avatar").innerHTML;
            winBanner.style.color = "rgb(0, 192, 252)";
        }
        winBanner.innerHTML = `There's a winner! <br> ${won} won`; 


        for (i=0; i<boarddiv.length; i++){
            boarddiv[i].removeEventListener('click', putMarkerOnBoard) 
        }
        
        if (winner == 0){
            (turn == player1) ? div1.style.background = "rgba(252,64,64,0.1)" : div1.style.background = "rgba(0, 192, 252, 0.1)"; 
            (turn == player1) ? div2.style.background = "rgba(252,64,64,0.1)" : div2.style.background = "rgba(0, 192, 252, 0.1)"; 
            (turn == player1) ? div3.style.background = "rgba(252,64,64,0.1)" : div3.style.background = "rgba(0, 192, 252, 0.1)"; 
        } else if (winner == 1){
            (turn == player1) ? div4.style.background = "rgba(252,64,64,0.1)" : div4.style.background = "rgba(0, 192, 252, 0.1)"; 
            (turn == player1) ? div5.style.background = "rgba(252,64,64,0.1)" : div5.style.background = "rgba(0, 192, 252, 0.1)"; 
            (turn == player1) ? div6.style.background = "rgba(252,64,64,0.1)" : div6.style.background = "rgba(0, 192, 252, 0.1)"; 
        } else if (winner == 2){    
            (turn == player1) ? div7.style.background = "rgba(252,64,64,0.1)" : div7.style.background = "rgba(0, 192, 252, 0.1)"; 
            (turn == player1) ? div8.style.background = "rgba(252,64,64,0.1)" : div8.style.background = "rgba(0, 192, 252, 0.1)"; 
            (turn == player1) ? div9.style.background = "rgba(252,64,64,0.1)" : div9.style.background = "rgba(0, 192, 252, 0.1)"; 
        } else if (winner == 3){        
            (turn == player1) ? div1.style.background = "rgba(252,64,64,0.1)" : div1.style.background = "rgba(0, 192, 252, 0.1)"; 
            (turn == player1) ? div4.style.background = "rgba(252,64,64,0.1)" : div4.style.background = "rgba(0, 192, 252, 0.1)"; 
            (turn == player1) ? div7.style.background = "rgba(252,64,64,0.1)" : div7.style.background = "rgba(0, 192, 252, 0.1)"; 
        } else if (winner == 4){     
            (turn == player1) ? div2.style.background = "rgba(252,64,64,0.1)" : div2.style.background = "rgba(0, 192, 252, 0.1)";  
            (turn == player1) ? div5.style.background = "rgba(252,64,64,0.1)" : div5.style.background = "rgba(0, 192, 252, 0.1)"; 
            (turn == player1) ? div8.style.background = "rgba(252,64,64,0.1)" : div8.style.background = "rgba(0, 192, 252, 0.1)"; 
        } else if (winner == 5){    
            (turn == player1) ? div3.style.background = "rgba(252,64,64,0.1)" : div3.style.background = "rgba(0, 192, 252, 0.1)"; 
            (turn == player1) ? div6.style.background = "rgba(252,64,64,0.1)" : div6.style.background = "rgba(0, 192, 252, 0.1)"; 
            (turn == player1) ? div9.style.background = "rgba(252,64,64,0.1)" : div9.style.background = "rgba(0, 192, 252, 0.1)"; 
        } else if (winner == 6){    
            (turn == player1) ? div1.style.background = "rgba(252,64,64,0.1)" : div1.style.background = "rgba(0, 192, 252, 0.1)"; 
            (turn == player1) ? div5.style.background = "rgba(252,64,64,0.1)" : div5.style.background = "rgba(0, 192, 252, 0.1)"; 
            (turn == player1) ? div9.style.background = "rgba(252,64,64,0.1)" : div9.style.background = "rgba(0, 192, 252, 0.1)"; 
        } else if (winner == 7){        
            (turn == player1) ? div3.style.background = "rgba(252,64,64,0.1)" : div3.style.background = "rgba(0, 192, 252, 0.1)"; 
            (turn == player1) ? div5.style.background = "rgba(252,64,64,0.1)" : div5.style.background = "rgba(0, 192, 252, 0.1)"; 
            (turn == player1) ? div7.style.background = "rgba(252,64,64,0.1)" : div7.style.background = "rgba(0, 192, 252, 0.1)"; 
        }
        

        playAgainButton.addEventListener("click", playAgainHandler);

        // function playAgainHandler(){
        //     boardArray1D =[' ',' ',' ',' ',' ',' ',' ',' ',' '];
        //     div1.style.background = "white";
        //     div2.style.background = "white";
        //     div3.style.background = "white";
        //     div4.style.background = "white";
        //     div5.style.background = "white";
        //     div6.style.background = "white";
        //     div7.style.background = "white";
        //     div8.style.background = "white";
        //     div9.style.background = "white";

        //     drawBoard(boardArray1D);
            
        //     playAgainButton.style.display = "none";
        //     playAgainButton.removeEventListener("click", playAgainHandler);
        //     tieImage1.style.display = "none";
        //     tieImage2.style.display = "none";  

        //     for (i=0; i<boarddiv.length; i++){
        //         boarddiv[i].addEventListener('click', putMarkerOnBoard); 
        //     }

        //     if (turn == player2){
        //         won = document.getElementById("caption-right-avatar").innerHTML;
        //         winBanner.style.color = "rgb(252,64,64)";
        //     } else {
        //         won = document.getElementById("caption-left-avatar").innerHTML;
        //         winBanner.style.color = "rgb(0, 192, 252)";
        //     }
        //     winBanner.innerHTML = `${won} starts`; 
        // }
    }


    const playAgainHandler = function(){
        boardArray1D =[' ',' ',' ',' ',' ',' ',' ',' ',' '];
        div1.style.background = "white";
        div2.style.background = "white";
        div3.style.background = "white";
        div4.style.background = "white";
        div5.style.background = "white";
        div6.style.background = "white";
        div7.style.background = "white";
        div8.style.background = "white";
        div9.style.background = "white";

        drawBoard(boardArray1D);
        
        playAgainButton.style.display = "none";
        playAgainButton.removeEventListener("click", playAgainHandler);
        tieImage1.style.display = "none";
        tieImage2.style.display = "none";  

        for (i=0; i<boarddiv.length; i++){
            boarddiv[i].addEventListener('click', putMarkerOnBoard); 
        }

        if (turn == player2){
            won = document.getElementById("caption-right-avatar").innerHTML;
            winBanner.style.color = "rgb(252,64,64)";
        } else {
            won = document.getElementById("caption-left-avatar").innerHTML;
            winBanner.style.color = "rgb(0, 192, 252)";
        }
        winBanner.innerHTML = `${won} starts`; 
    }


    const drawBoard = function (boardArray1D) {
        let i=0;
        boarddiv.forEach((item) => {
            item.textContent = boardArray1D[i];
            
            if (boardArray1D[i] == "x"){
                item.style.color = "rgb(0, 192, 252)";
            } else if (boardArray1D[i] == "o"){
                item.style.color = "rgb(252, 64, 64)";
            }
            
            i +=1; 
        });
    }


    const array1Dto2D = function(boardArray1D){
        const boardArray2D = [];
        boardArray2D.push(boardArray1D.slice(0,3));
        boardArray2D.push(boardArray1D.slice(3,6));
        boardArray2D.push(boardArray1D.slice(6,9));
        return boardArray2D;
    }

    
    const evaluateWinner = function(turn){
        turn == player1? marker=player1.marker : marker=player2.marker;

        let boardArrayInteger = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
        for (i=0; i<9; i++){
            boardArray1D[i] == marker? boardArrayInteger[i]=1 : boardArrayInteger[i]=0;
        }
                        
        let Array2D = array1Dto2D(boardArrayInteger);
             
        const row1 = Array2D[0][0] + Array2D[0][1] + Array2D[0][2];
        const row2 = Array2D[1][0] + Array2D[1][1] + Array2D[1][2];
        const row3 = Array2D[2][0] + Array2D[2][1] + Array2D[2][2];
        const col1 = Array2D[0][0] + Array2D[1][0] + Array2D[2][0];
        const col2 = Array2D[0][1] + Array2D[1][1] + Array2D[2][1];
        const col3 = Array2D[0][2] + Array2D[1][2] + Array2D[2][2];
        const diag1 = Array2D[0][0] + Array2D[1][1] + Array2D[2][2];
        const diag2 = Array2D[0][2] + Array2D[1][1] + Array2D[2][0];
        
        const boardEvaluation = [row1, row2, row3, col1, col2, col3, diag1, diag2];

        const isWinner = boardEvaluation.findIndex((item) => item == 3);
        
        return isWinner;
    } 

   
    function minimax(turn, boardArray1D, depth){
    
        if (gb.evaluateWinner(player2) >=0) {
            //console.log("eval 10");
            return {evaluation : +10};

        } else if (gb.evaluateWinner(player1) >=0){
            //console.log("eval -10");
            return {evaluation : -10};
        }
        
        if (boardArray1D.findIndex((item) => item == ' ')==-1){
            //console.log("eval 0");
            return {evaluation : 0};
        }
            
        const possibleMove = [];
        for (i=0; i<9; i++){
            if (boardArray1D[i] == ' '){
                possibleMove.push(i);
            }   
        }

        let moves = [];
    
        for (let i=0; i<possibleMove.length; i++){
            let id = possibleMove[i];
            // console.log(id);
            let backup = boardArray1D[id];
            boardArray1D[id] = turn.marker;
            // console.log('88888877');
            // console.log(boardarray);

            let move = {}
            move.id = id;
    
            if (turn==player1){
                move.evaluation = minimax(player2, boardArray1D, depth+1).evaluation;
            } else if (turn==player2){
                move.evaluation = minimax(player1, boardArray1D, depth+1).evaluation;
            }
            boardArray1D[id] = backup;
            moves.push(move);
        } 
        
        /* Minimax Algorithm */ 
        let bestmove;

        if (turn == player2){
            /* Maximiser */
            let bestEvaluation = -Infinity; 
            for (let j=0; j<moves.length; j++){
                if (moves[j].evaluation > bestEvaluation){
                    bestEvaluation = moves[j].evaluation;
                    bestmove = moves[j];
                }
            }
        } else if (turn == player1){
            /* Minimizer */
            let bestEvaluation = +Infinity;
            for (let j=0; j<moves.length; j++){
                if (moves[j].evaluation < bestEvaluation){
                    bestEvaluation = moves[j].evaluation;
                    bestmove = moves[j];
                }
            }
        }
        return bestmove;
    }  


    for (i=0; i<boarddiv.length; i++){
        boarddiv[i].addEventListener('click', putMarkerOnBoard)
    }


    return {boardArray1D, array1Dto2D, drawBoard, evaluateWinner, minimax, foundWinner, playAgainHandler};    

})();


const createPlayer = (function(mark) {
    const marker = mark;
    return {marker};
});


// Play game
const startGame = (function(){
    gb = gameboard;

    gb.drawBoard(gb.boardArray1D);

    player1 = createPlayer('x');
    player2 = createPlayer('o');

    turn = player1;

    return {gb, player1, player2, turn}

})();