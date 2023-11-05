let today = new Date().toISOString().slice(0, 10);
let curr = new Date();
/*
function addtask()
{
    let deadline = document.getElementById("deadline");
    console.log(deadline.value);
    let task = document.getElementById("taskinput");
    let newtask = document.createElement("li");
    newtask.textContent = task.value + " " + deadline.value;
    
    if(today != deadline.value)
    document.getElementById("lowlist").appendChild(newtask);
    
    else
        document.getElementById("highlist").appendChild(newtask);
    
    task.value = "";
    deadline.value = null;
}*/

function addtask()
{
    
    let deadline = document.getElementById("deadline");
    console.log(deadline.value);
    let task = document.getElementById("taskinput");
    
    let dead = new Date(deadline.value);

    let newcheck = document.createElement("input");
    newcheck.className = "new-check";
    newcheck.type = "checkbox";
    
    let newtask = document.createElement("span");
    newtask.textContent = task.value + " " + deadline.value;

    let newdiv = document.createElement("div");
    newdiv.className = "new-div";
    newdiv.appendChild(newcheck);
    newdiv.appendChild(newtask);
    
    
    if(deadline.value == today)
    {
        document.getElementById("high").appendChild(newdiv);
    }

    else if(dead > curr)
    {
        document.getElementById("low").appendChild(newdiv);
    }
    task.value = "";
    deadline.value = null;  
}

// (document.getElementsByClassName("new-check")).