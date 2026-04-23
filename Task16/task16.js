function cleannumber() {  //gets input value
    let phone = document.getElementById("phonecleaned").value;

    let cleaned = phone.replace(/\D/g, "");  //removes non digits
    cleaned = cleaned.slice(-10) //keep last 10 digits
    document.getElementById("output").innerText = "cleaned:" + cleaned;// displays result
}




function checkpassword() {
    let pass = document.getElementById("password").value;
    let strength = 0;

    if (pass.length >= 8) strength++;

    if (/[a-z]/.test(pass)) strength++;

    if (/[A-Z]/.test(pass)) strength++;

    if (/[0-9]/.test(pass)) strength++;

    if (/[@#$%&*!?]/.test(pass)) strength++;

    let result = "";

    if (strength <= 2) {
        result = "Weak";
    }
    else if (strength === 3 || strength === 4) {
        result = "Medium";
    }
    else {
        result = "Strong";
    }

    document.getElementById("strength").innerText = result;


}


const originalText = document.getElementById("text").innerText;
function highlight() {
    let keyword = document.getElementById("search").value;//user input
    let textElement = document.getElementById("text");

    // reads paragraph text
    if (keyword === "") {
        textElement.innerHTML = originalText;
        return;
    }

    let regex = new RegExp(`(${keyword})`, "gi");//g->global(allmatches) i->case -insensitive

    textElement.innerHTML = originalText.replace(regex, '<span class="highlight">$1</span>');//wraps matched word in <span>
    textElement.innerText = newText;// displays highlighted text

}

//clock

function showTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerText = time;
}
setInterval(showTime, 1000);

//Timer

let count = 0;                //starts from 0
let intervel;                 //store timer

function start() {  //start button clicked
    if (!intervel) {      //is timer already running no timer running
        intervel = setInterval(() => {      //starts repeating loop
            count++;                               //increases value by 1
            document.getElementById("timer").innerText = count;
        }, 1000); //runs every 1000ms=1s

    }
}

function stop() {
    clearInterval(intervel);
    intervel = null;          //resets interval variable
}

//Date Formatting
function showdate() {                     //function name
    let now = new Date();                     //creates date obj and gets date from the system
    let day = now.getDate();                //extracts date of the month
    let month = now.getMonth() + 1;            //returns month 0-11 so we add +1
    let year = now.getFullYear();               //gets full year
    let result = day + "/" + month + "/" + year;//combines values into string
    document.getElementById("result").innerText = result;//dispaly the date
}


function orderIdCheck() {
    let id = document.getElementById("orderId").value;
    let pattern = /^ORD-\d{4}-\d{5}$/;
    if (!pattern.test(id)) {
        document.getElementById("result").innerText = "Invalid Order ID";
        return;
    }

    let parts = id.split("-");

    let output = "Prefix:" + parts[0] + "\n" + "Year:" + parts[1] + "\n" + "Number:" + parts[2];
    document.getElementById("parseresult").innerText = output;
}
