const gameboard = (function () {
    const boarddiv = document.querySelectorAll(".div-gameboard > *");
    

    let boardArray1D = [' ',' ',' ',' ',' ',' ',' ',' ',' '];


    const currentPlayer = function(){
        
        if (opponent == 'AI'){
            if (turn==player2){

                turn = player1;
                console.log("do I get to this fucking point?");
            } else {
                  
                for (i=0; i<boarddiv.length; i++){
                    boarddiv[i].removeEventListener('click', putMarkerOnBoard)
                }
                
                console.log("do I get to this point?");
                const aiMove =  minimax(player2, boardArray1D,0);
                console.log(aiMove);
                
                setTimeout( () => {
                for (i=0; i<boarddiv.length; i++){
                    boarddiv[i].addEventListener('click', putMarkerOnBoard)
                }}, 1000);
                
                turn = player2;  
                boardArray1D[aiMove.id] = player2.marker;
                gb.drawBoard(boardArray1D);
                
                winner = evaluateWinner(turn);        
                if (winner >= 0){ 
                    congratulate();
                }   

                turn = player1; 
            }

        } else {
            if (turn == player1){
                turn = player2;
            } else {
                turn = player1;
            }
            console.log("Here?");
        }

        console.log(turn);
    }


    const putMarkerOnBoard = function(e){
        turn == player1? marker=player1.marker : marker=player2.marker;
        let winner = -1;
        
        console.log('test1');
        if (e.target.className == 'div-board-1') {
            if (boardArray1D[0] ==' ') {
                boardArray1D.splice(0, 1, marker);
                gb.drawBoard(boardArray1D);
                currentPlayer();
                }; 
        } else if (e.target.className == 'div-board-2') {
            if (boardArray1D[1] ==' ') {
                boardArray1D.splice(1, 1, marker);
                gb.drawBoard(boardArray1D);
                currentPlayer();
                }; 
        } else if (e.target.className == 'div-board-3') {        
            if (boardArray1D[2] ==' ') {
                boardArray1D.splice(2, 1, marker);
                gb.drawBoard(boardArray1D);
                currentPlayer();
                }; 
        } else if (e.target.className == 'div-board-4') {      
            if (boardArray1D[3] ==' ') {
                boardArray1D.splice(3, 1, marker);
                gb.drawBoard(boardArray1D);
                currentPlayer();
                }; 
        } else if (e.target.className == 'div-board-5') {  
            if (boardArray1D[4] ==' ') {
                boardArray1D.splice(4, 1, marker);
                gb.drawBoard(boardArray1D);
                currentPlayer();
                }; 
        } else if (e.target.className == 'div-board-6') {            
            if (boardArray1D[5] ==' ') {
                boardArray1D.splice(5, 1, marker);
                gb.drawBoard(boardArray1D);
                currentPlayer();
                }; 
        } else if (e.target.className == 'div-board-7') {  
            if (boardArray1D[6] ==' ') {
                boardArray1D.splice(6, 1, marker);
                gb.drawBoard(boardArray1D);
                currentPlayer();
                }; 
        } else if (e.target.className == 'div-board-8') {
            if (boardArray1D[7] ==' ') {
                boardArray1D.splice(7, 1, marker);
                gb.drawBoard(boardArray1D);
                currentPlayer();
                }; 
        } else if (e.target.className == 'div-board-9') {         
            if (boardArray1D[8] ==' ') {
                boardArray1D.splice(8, 1, marker);
                gb.drawBoard(boardArray1D);
                currentPlayer();
                };  
        }
        
        winner = evaluateWinner(turn);        
        if (winner >= 0){ 
            congratulate();
        }    
        
        console.log("halkli hallo"); 
    };
 

    // const moveAI = function(){
    //     marker=player2.marker;
    //     const possibleMove = boardArray1D.findIndex(item => item == ' ')    
    //     boardArray1D.splice(possibleMove, 1, marker);
    //     evaluateWinner();
    //     currentPlayer();
    // }


    const drawBoard = function (boardArray1D) {
        let i=0;
        boarddiv.forEach((item) => {
            item.textContent = boardArray1D[i];
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

    const congratulate = function(){
        alert ("We have a winner");
    }

    for (i=0; i<boarddiv.length; i++){
        //boarddiv[i].addEventListener('click', function(e){putMarkerOnBoard(e)})
        boarddiv[i].addEventListener('click', putMarkerOnBoard)
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
        //return {minimax};
    }  

    return {boardArray1D, array1Dto2D, drawBoard, evaluateWinner, minimax};    

})();


const createPlayer = (function(mark) {
    const marker = mark;
        
    return {marker};
});


// const controllerAI = (function() {

//     function minimax(turn, board){
//         if (jjj<20){/* */ 
//         if (gb.evaluateWinner(player1) >=0) {
//             console.log('return 10');
//             return {evaluation : +10};

//         } else if (gb.evaluateWinner(player2) >=0){
//             console.log('return -10');
//             return {evaluation : -10};
//         }
        
//         if (board.findIndex((item) => item == ' ')==-1){
//             console.log('return 0');
//             return {evaluation : 0};;
//         }
            
//         const possibleMove = [];
//         for (i=0; i<= 9; i++){
//             if (board[i] == ' '){
//                 possibleMove.push(i);
//             }   
//         }
        
//         console.log(board);
        
//         let moves = [];
    
//         for (i=0; i<=possibleMove.length; i++){
//             const id = possibleMove[i];
             
//             let backup = board[id];
//             board[id] = turn.marker;
    
//             let move = {}
//             move.id = id;
    
//             if (turn==player1){
//                 move.evaluation = minimax(player2, board).evaluation;
//                 jjj=jjj+1;
//             } else if (turn==player2){
//                 move.evaluation = minimax(player1, board).evaluation;
//                 jjj=jjj+1;
//             }
    
          
//             board[id] = backup;
//             moves.push(move);
//             console.log(moves);
            
//         } 
                
        
//         /* Minimax Algorithm */ 
//         let bestmove;

//         if (turn == player1){
//             /* Maximiser */
//             let bestEvaluation = -Infinity; 
//             for (i=0; i<moves.length; i++){
//                 if (moves[i].evaluation > bestEvaluation){
//                     bestEvaluation = moves[i].evaluation;
//                     bestmove = moves[i];
//                 }
//             }
//         } else if (turn == player2){
//             /* Minimizer */
//             let bestEvaluation = +Infinity;
//             for (i=0; i<moves.length; i++){
//                 if (moves[i].evaluation < bestEvaluation){
//                     bestEvaluation = moves[i].evaluation;
//                     bestmove = moves[i];
//                 }
//             }
//         }
//         // console.log(bestmove);
        
//         console.log(bestmove);
//         jjj=jjj+1;
//         return bestmove;
//     }
//     return {minimax};
    
//     }   
// })();




// Play game

opponent = "AI";
gb = gameboard;

boardArray2 = ['x','o','','','x','o','o','',''];

gb.drawBoard(gb.boardArray1D);

player1 = createPlayer('x');
player2 = createPlayer('o');

turn = player1;

let jjj=0;
