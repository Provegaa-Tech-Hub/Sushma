let input=document.getElementById("itemInput");
let button=document.getElementById("addbtn");
let list=document.getElementById("list");


button.addEventListener("click",()=>{
    let value=input.value;


    if(value ===""){
        alert("Enter something");
        return;
        let li=document.createElement("li");
        li.innerText=value;
        list.appendChild(li);

        input.value= "";
    }
});