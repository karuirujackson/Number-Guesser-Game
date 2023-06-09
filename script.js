let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 0;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10)
 
console.log(generateTarget())

const compareGuesses = (humanGuess, computerGuess, secretTargetNumber) => {
    const humanDiff = Math.abs(humanGuess - secretTargetNumber);
    const computerDiff = Math.abs(computerGuess - secretTargetNumber);

    if(humanDiff <= computerDiff){
        return true;
    }else{
        return false;
    }
    //return humnDiff <= computerDiff;
};

console.log(compareGuesses());

const updateScore = winner => {
    if(winner === 'human'){
        humanScore ++;
    }else if(winner = 'computer'){
        computerScore ++;
    }
};
updateScore();

const advanceRound = () => currentRoundNumber ++;
advanceRound(); 