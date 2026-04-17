let input = document.getElementById("itemInput");// gets input box
let button = document.getElementById("addbtn"); // add button
let list = document.getElementById("list"); //ul will be added


button.addEventListener("click", () => { // listens to button click
    let value = input.value; // gets typed text


    if (value === "") { // if input is empty
        alert("Enter something"); //shows alert
    }

    else {                 // runs if not empty
        let li = document.createElement("li");   // creates new li elements
        li.innerText = value;       // adds text given
        list.appendChild(li);       //add <li> to <ul> and shows the out put

        input.value = "";           // clears inbox
    }
});