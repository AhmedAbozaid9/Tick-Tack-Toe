const buttons = document.querySelectorAll('.box')
let header = document.querySelector('h1')
let playerTurn = true
let availablePositions = [0,1,2,3,4,5,6,7,8]
let didPlayerWin = false
//the class that will be applied for the position of the line
let lineClass
//the logic of the game.
    playerChoice()
//get the player choice
function playerChoice(){
    const playWith = 'X'
    buttons.forEach((button,idx) => {
         button.addEventListener('click',() => {
             document.querySelector('h3').style.opacity = '0'
            if(button.innerHTML == '' && playerTurn){
                 button.innerHTML = 'X'
                 availablePositions.splice(availablePositions.indexOf(idx),1)
                 playerTurn = false
                checkWin(playWith)
                setTimeout(computerChoice,200)
          }
       })
                
   })
}
//make the computer choice
function computerChoice(){
    const playWith = 'O'
    if(!didPlayerWin){
    if(!playerTurn){
       let randomIdx = Math.floor(Math.random()*(availablePositions.length))
       let choice = availablePositions[randomIdx]
        buttons[choice].innerHTML = 'O'
        if(availablePositions.length != 2){
            availablePositions.splice(availablePositions.indexOf(choice),1)
        }
        playerTurn = true
        
            checkWin(playWith)
        }
        
    }
}
//check win
function checkWin(whoWin){
    //turn the nodelist to an array and then map it to get the innerHTML
    let choices = Array.prototype.slice.call(buttons).map(choice => choice.innerHTML)
    //the rows
    if(choices[0] == choices [1] && choices [1] == choices[2] &&choices[2] != ''){
        didPlayerWin = true
        header.innerHTML = (whoWin) + ' Wins!'
        reset()
        document.querySelector('.grid').classList.add('r1')
    }else if (choices[3] == choices [4] && choices [4] == choices[5] &&choices[5] != ''){
        didPlayerWin = true
        header.innerHTML = (whoWin) + ' Wins!'
        reset()
        document.querySelector('.grid').classList.add('r2')
    }else if(choices[6] == choices[7] &&choices[7] == choices[8] && choices[8] != ''){
        didPlayerWin = true
        header.innerHTML = (whoWin) + ' Wins!'
        reset()
        document.querySelector('.grid').classList.add('r3')
    }
    //the columns
    else if(choices[0] == choices [3] && choices [3] == choices[6] &&choices[6] != ''){
        didPlayerWin = true
        header.innerHTML = (whoWin) + ' Wins!'
        reset()
        document.querySelector('.grid').classList.add('c1')
    }else if(choices[1] == choices[4] &&choices[4] == choices[7] && choices[7] != '') {
        didPlayerWin = true
        header.innerHTML = (whoWin) + ' Wins!'
        reset()
        document.querySelector('.grid').classList.add('c2')
    }else if(choices[2] == choices[5] &&choices[5] == choices[8] && choices[8] != ''){
        didPlayerWin = true
        header.innerHTML = (whoWin) + ' Wins!'
        reset()
        document.querySelector('.grid').classList.add('c3')
    }
    //the diagonals
    else if(choices[0] == choices[4] &&choices[4] == choices[8] && choices[8] != ''){
        didPlayerWin = true
        header.innerHTML = (whoWin) + ' Wins!'
        reset()
        document.querySelector('.grid').classList.add('d1')
    }
    else if(choices[2] == choices[4] &&choices[4] == choices[6] && choices[6] != ''){
        didPlayerWin = true
        header.innerHTML = (whoWin) + ' Wins!'
        reset()
        document.querySelector('.grid').classList.add('d2')
    }else{
        //check for a tie
        let counter = 0
        choices.forEach(choice => {
            if(choice.length === 1){
                counter++
            }
            if(counter === 9){
                didPlayerWin = true
                header.innerHTML = 'Tie !'
                reset()
            }
        })
    }
}
//after winning 
function reset(){
    
    setTimeout(() => {
        availablePositions = [0,1,2,3,4,5,6,7,8]
    Array.prototype.slice.call(buttons).forEach(button => button.innerHTML = '')
    playerTurn = true
    didPlayerWin = false
    header.innerHTML = 'Play again!'
    },800)
    setTimeout(() => {
        document.querySelector('.grid').classList.remove('r1', 'r2', 'r3', 'c1', 'c2', 'c3', 'd1', 'd2')
    }, 800);
}

   