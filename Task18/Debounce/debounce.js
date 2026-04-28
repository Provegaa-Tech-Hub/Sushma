let timer;
function debounce(func, delay) {
    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}


function handlesearch(value) {       //This runs only after user stops typing
    document.getElementById("output").innerText = "searching for :" + value;  //Displays typed text on screen
    console.log("Function called with:",value);
}

let debouncesearch=debounce(handlesearch,500);  //Returns a new function with delay
document.getElementById("SearchId").addEventListener("input",function(){  //Selects input box and Runs on every keystroke
    debouncesearch(this.value);                             //Calls debounced function
});