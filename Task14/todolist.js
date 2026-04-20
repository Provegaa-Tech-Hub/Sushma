function addTask(){
    let input = document.getElementById("taskInput");

    let value =input.value; //text typed by user

    if (value === ""){ //checks if input is empty
        alert("Enter a task!");// shows popup if empty
        return; // stops function execution
    }

    let li=document.createElement("li"); // creates new list

    li.innerText=value; //adds user text inside

    li.onclick=function(){
        li.style.textDecoration="line-through";// add strike line
    };

    let del=document.createElement("button"); //creates del button
    del.innerText="Delete";

    del.onclick=function(){
        li.remove();
    };

    li.appendChild(del); //adds delete button inside<li>
    document.getElementById("list").appendChild(li); //Adds tasks
    input.value=""; //clears input
}