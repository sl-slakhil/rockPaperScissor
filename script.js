console.log("Hello! World")
function getComputerChoice()
{
    const choice = Math.floor(Math.random()*10)%3;
        if (choice==0)
            return("rock");
        if (choice==1)
            return("paper")
        if (choice==2)
            return("scissors")
        return choice;

}



function getUserInput(){
    const userInput=prompt("Enter rock, paper or scissors: ").toLowerCase();
    console.log(userInput)
    return userInput;
 
}
let humanScore =0;
let computerscore =0;

function playRound(humanChoice,computerChoice){
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
        return 'tie';
        }
    if (humanChoice=="rock"&&computerChoice=="scissors" || humanChoice=="scissors"&&computerChoice=="paper" || humanChoice=="paper"&&computerChoice=="rock")
        {
            console.log(`You win ${humanChoice} beats ${computerChoice}`);
            humanScore=humanScore+1;
            return "human";
        }
    else{
        console.log(`Better luck next time ${computerChoice} beats ${humanChoice}`)
        computerscore=computerscore+1;
        return "computer";
    }
}




for (let i = 1;i<=5;i++){
    let humanSelection =getUserInput();
    let computerSelection = getComputerChoice();
    console.log(playRound(humanSelection,computerSelection))
}

console.log(humanScore);
console.log(computerscore)