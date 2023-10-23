console.log("testing") //tesing of JS
let turn = 'X';  // to declares a variable
let gameover = false;
//write function to change turn
function changeTurn(){
    if(turn === 'X'){
        return 'O';
    }
    return "X";
}
// function to check if there is a winner
function checkWin(){
    // to get all of the text elements in the game board.
    let text = document.getElementsByClassName('text');
    // define all the possible winning conditions.
    let winningConditions = [[0, 1, 2],[3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    winningConditions.forEach(function(e){
        if((text[e[0]].innerText === text[e[1]].innerText) && (text[e[2]].innerText === text[e[1]].innerText) && (text[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = "Player " + text[e[0]].innerText + " Won";
            gameover = true;
            if(gameover){
                alert("Player " + text[e[0]].innerText + " Won.\n" + "Game Over.\nClick RESET to start again.")
            }
        }
    })
}
// to get all of the boxes in the game board.
let boxes = document.querySelectorAll(".boxes");
//to iterate all of the boxes in the game board.
Array.from(boxes).forEach(function(e) {
    let boxtext = e.querySelector(".text");
    // Add an event listener to the box.
    e.addEventListener('click', function(){
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeTurn();  // Change the turn.
            // Check for a winner.
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Player " + turn + "'s turn";
            }
        }
    })
})
// to get all of the boxes in the game board.
const resetButton = document.querySelectorAll('.reset');
resetButton.forEach(function(reset) {
    reset.addEventListener('click', () => {
        let texts = document.querySelectorAll('.text');
        Array.from(texts).forEach(function(e) {
            e.innerText = "";
        });
        turn = "X";
        gameover = false;
        // Update the info text to show the current turn.
        if(!gameover){
            document.getElementsByClassName("info")[0].innerText = "Player " + turn + "'s turn";
        }
    });
});
