let sub = document.getElementById("subscribe");

//sub.onmouseover = () =>{}

sub.onclick = () =>{
    if(sub.innerHTML == "Subscribe")
     {
        sub.innerHTML = "Subscribed";
        sub.style.backgroundColor = "rgb(240,240,240)";
        sub.style.color = "black"
     }
    else
       {
        sub.innerHTML = "Subscribe";
        sub.style.backgroundColor = "black";
        sub.style.color = "white";
    } 
}


















let choice = document.getElementsByClassName("rps");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const label = document.getElementById("w/l");
let display = document.getElementById("choices");
const choices = ["rock","paper","scissors"];
let win =0 , loss = 0 , tie = 0;

rock.onclick = () => {
    play("rock");
}

paper.onclick = () => {
    play("paper");
}

scissors.onclick= () => {
    play("scissors");
}
document.getElementById("reset").onclick = () => {
    win=0;loss=0;tie=0;
    document.getElementById("tie").innerHTML = 0;
    document.getElementById("win").innerHTML = 0;
    document.getElementById("lose").innerHTML = 0;
}

function autoplay(){
    if(document.getElementById("auto").innerHTML == "Auto play")
    {const iter = setInterval(function(){
        play(computermove());
    },1000);
    document.getElementById("auto").innerHTML = "Stop";
    document.getElementById("auto").setAttribute("data-interval", iter); }

    else
    {   const iter = document.getElementById("auto").getAttribute("data-interval");
        clearInterval(iter);
        document.getElementById("auto").innerHTML = "Auto play";
    }
}

function play(choice)
{  
    const cc = computermove();
    display.innerHTML = "Your choice: " + choice + "  &nbsp;Computer's choice:  " + cc;


    if(choice == cc)
      {label.innerHTML = "Tie";
        tie++;
        document.getElementById("tie").innerHTML = tie;}

      else if 
      ( (choice === "rock" && cc === "scissors") ||(choice === "paper" && cc === "rock") ||
        (choice === "scissors" && cc === "paper")) 
        {label.innerHTML = "You win";
        win++;
        document.getElementById("win").innerHTML = win;
        }

    else 
       {
        loss++;
        document.getElementById("lose").innerHTML = loss;
        label.innerHTML = "You lose";
       }
}

function computermove()
{
    const rando = Math.floor(Math.random() * 3);
    const cm = choices[rando];
    return cm;
}