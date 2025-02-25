let usercore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); 
const usercorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#compscore");

const compchoice = () => {
    const options = ["rock", "paper", "scissors"]; /* we can randomly choose string but we can randomly choose number so becuze of 
                                                    tha we use ranom function */ 
     const randomIndex = Math.floor(Math.random() * options.length); /*by using math.floor we remove all the decimal values from 
                                                                    the string and option length use to calculate the lenght of array and then
                                                                     we multiply the by that no so we get random number in */
                                                                    //between array index ex here array indexing is 0-2 so we generate a random number from 0-2
     return options[randomIndex];                                   // return random number from option array

}
const showwinner = (userwin,userschoice,computerChoice) => {
    if (userwin) {
        console.log("user wins!");
        msg.innerText=`You wins.! Your ${userschoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
        usercore++;
        usercorepara.innerText = usercore;
    } 
    else {
        console.log("Computer wins!");
        msg.innerText=`Computer wins.!  ${computerChoice} beats Your ${userschoice}`;
        msg.style.backgroundColor = "Red";
        compscore++;
        compscorepara.innerText = compscore;
        
    }
     
}

const drawgame = () =>{
    console.log("Game is draw....");
    msg.innerText="Game is draw ! play again!";
    msg.style.backgroundColor = "#081b31";
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userschoice = choice.getAttribute("id");       // id is attribute from html her we access the attribute name of all id from choice class
        playgame(userschoice);
    });
});


const playgame = (userschoice) => {
    console.log("users choice :",userschoice);
    // generate computer choice
    const computerChoice = compchoice();
    console.log("Computer choice :", computerChoice);  

    if (userschoice === computerChoice) {
        drawgame(); 
    }else{
        let userwin = true;
         if ((userschoice === "rock" && computerChoice === "scissors") ||
             (userschoice === "paper" && computerChoice === "rock") ||
             (userschoice === "scissors" && computerChoice === "paper")) {
             userwin = true;
         } else {
             userwin = false;
         }
         showwinner(userwin,userschoice,computerChoice);
    }

}
