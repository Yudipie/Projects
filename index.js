const num1 = Math.floor(Math.random()*10 + 1);

document.getElementById("submit").onclick = function() {
    
    const num = document.querySelector("#input").value;
    if(num == num1)
        document.getElementById("hehe").innerHTML = "You guessed it RIGHT";
    
    else if(num<num1)
        document.getElementById("hehe").innerHTML = "aim higher";

    else if(num>num1)
        document.getElementById("hehe").innerHTML = "aim lower";
    
    else
        document.getElementById("hehe").innerHTML = "You guessed it WRONG";


}
