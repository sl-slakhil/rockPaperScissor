console.log("Hello! World")
function getComputerChoice()
{
    const choice = Math.floor(Math.random()*10)%3;
        if (choice==0)
            console.log("Comp chose Rock");
        if (choice==1)
            console.log("Comp choose paper");
        if (choice==2)
            console.log("Comp choose scissor");
        return choice;

}



function getUserInput(){
    const userInput=prompt("Enter 1 for rock, 2 for paper 3 for scissors: ");
    if (userInput==1)
        console.log("You chose Rock");
    if (userInput==2)
        console.log("You choose paper");
    if (userInput==3)
        console.log("You choose scissor");
    return userInput;
}


function RockPaperScissor(){
    const userval1 = getUserInput();
    const compval = getComputerChoice();
    const userval = parseInt(userval1)-1;
    console.log(userval)
    if (userval==compval){
        console.log("Try again!")
    }
    if (userval==0&compval==2 || userval==2&compval==1 || userval==1&compval==0 ){
        console.log("You Win")
    }
    else{
        console.log("Loose! Better luck next time")
    }
}

console.log(RockPaperScissor())