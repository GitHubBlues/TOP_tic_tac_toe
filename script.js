const gameboard = (function () {
    const boarddiv = document.querySelectorAll(".div-gameboard > *");
    
    for (i=0; i<boarddiv.length; i++){
        boarddiv[i].addEventListener('click',function(e){putMarkerOnBoard(e)})
    }
    

    let boardArray1D = [' ',' ',' ',' ',' ',' ',' ',' ',' '];


    const currentPlayer = function(){
        if (turn == player1){
            turn = player2;
        } else {
            turn = player1;
        }
    }


    const putMarkerOnBoard = function(e){
        turn == player1? marker=player1.marker : marker=player2.marker;

        switch (e.target.className) {
            case 'div-board-1':
                if (boardArray1D[0] ==' ') {
                    boardArray1D.splice(0, 1, marker);
                    evaluateWinner();
                    currentPlayer();
                }; 
                break;
            case 'div-board-2':
                if (boardArray1D[1] ==' ') {
                    boardArray1D.splice(1, 1, marker);
                    evaluateWinner();
                    currentPlayer();
                }; 
                break;
            case 'div-board-3':            
                if (boardArray1D[2] ==' ') {
                    boardArray1D.splice(2, 1, marker);
                    evaluateWinner();
                    currentPlayer(); 
                }; 
                break;
            case 'div-board-4':            
                if (boardArray1D[3] ==' ') {
                    boardArray1D.splice(3, 1, marker);
                    evaluateWinner();
                    currentPlayer();
                }; 
                break;
            case 'div-board-5':            
                if (boardArray1D[4] ==' ') {
                    boardArray1D.splice(4, 1, marker);
                    evaluateWinner();
                    currentPlayer();
                }; 
                break;
            case 'div-board-6':            
                if (boardArray1D[5] ==' ') {
                    boardArray1D.splice(5, 1, marker);
                    evaluateWinner();
                    currentPlayer();
                }; 
                break;
            case 'div-board-7':            
                if (boardArray1D[6] ==' ') {
                    boardArray1D.splice(6, 1, marker);
                    evaluateWinner();
                    currentPlayer();
                }; 
                break;
            case 'div-board-8':            
                if (boardArray1D[7] ==' ') {
                    boardArray1D.splice(7, 1, marker);
                    evaluateWinner();
                    currentPlayer();
                }; 
                break;                                                                          
            case 'div-board-9':            
                if (boardArray1D[8] ==' ') {
                    boardArray1D.splice(8, 1, marker);
                    evaluateWinner();
                    currentPlayer();
                };  
                break; 
        }
        
        gb.drawBoard(boardArray1D);
 
    };


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

    
    const evaluateWinner = function(){
        turn == player1? marker=player1.marker : marker=player2.marker;

        let boardArrayInteger = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
        for (i=0; i<9; i++){
            boardArray1D[i] == marker? boardArrayInteger[i]=1 : boardArrayInteger[i]=0;
        }
        
        
        let Array2D = gb.array1Dto2D(boardArrayInteger);
             
        const row1 = Array2D[0][0] + Array2D[0][1] + Array2D[0][2];
        const row2 = Array2D[1][0] + Array2D[1][1] + Array2D[1][2];
        const row3 = Array2D[2][0] + Array2D[2][1] + Array2D[2][2];
        const col1 = Array2D[0][0] + Array2D[1][0] + Array2D[2][0];
        const col2 = Array2D[0][1] + Array2D[1][1] + Array2D[2][1];
        const col3 = Array2D[0][2] + Array2D[1][2] + Array2D[2][2];
        const diag1 = Array2D[0][0] + Array2D[1][1] + Array2D[2][2];
        const diag2 = Array2D[0][2] + Array2D[1][1] + Array2D[2][0];
        
        const boardEvaluation = [row1, row2, row3, col1, col2, col3, diag1, diag2];

        console.log(row1 + ' ' + row2 + ' '+ row3 + ' ' + col1 + ' '+ col2 + ' ' + col3 + ' '+diag1+' '+ diag2);
        console.log(boardEvaluation);

        const isWinner = boardEvaluation.findIndex((item) => item == 3);
            if (isWinner>=0){
                alert('you won!');
            }
        } 


    return {boardArray1D, array1Dto2D, drawBoard};    

})();



const createPlayer = (function(mark) {
    const marker = mark;
        
    return {marker};
});



const controller2players = (function() {


    
})();






gb = gameboard;

boardArray2 = ['x','o','','','x','o','o','',''];

gb.drawBoard(gb.boardArray1D);

player1 = createPlayer('x');
player2 = createPlayer('o');

turn =player1;
