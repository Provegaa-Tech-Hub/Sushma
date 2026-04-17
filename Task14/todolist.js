function addTask(){
    let input = document.getElementById("taskInput");

    let value =input.value;

    if (value === ""){
        alert("Enter a task!");
        return;
    }

    let li=document.createElement("li");

    li.innerText=value;

    li.onclick=function(){
        li.style.textDecoration="line-through";
    };

    let del=document.createElement("button");
    del.innerText="";

    del.onclick=function(){
        li.remove();
    };

    li.appendChild(del);
    document.getElementById("list").appendChild(li);
    input.value="";
}