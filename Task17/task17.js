let time = 30;
let intervel;
let button = document.getElementById("timerbutton");
let display = document.getElementById("timer");
button.addEventListener("click", function () {
    clearInterval(intervel);
    button.disabled = true;
    time = 30;
    display.innerText = "Resend OTP in" + time + "s";

    intervel = setInterval(() => {
        time--;
        display.innerText = "Resend OTP in" + time + "s";

        if (time <= 0) {
            clearInterval(intervel);
            display.innerText = "you can resend OTP now ";
            button.disabled = false;
        }
    }, 1000);
});


let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let emailerror = document.getElementById("emailerror");
let phoneerror = document.getElementById("phoneerror");
let passworderror = document.getElementById("passworderror");
email.addEventListener("input", function () {
    let value = email.value;
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === "") {
        emailerror.innerText = "Email is required";
    }
    else if (!pattern.test(value)) {
        emailerror.innerText = "Invalid email format";
    }
    else {
        email.innerText = "Valid email";
        emailerror.className = "valid";
    }
});
phone.addEventListener("input", function () {
    let value = phone.value.replace(/\D/g, "");
    if (value.length !== 10) {
        phoneerror.innerText = "Enter 10 digit number";
    }
    else {
        phoneerror.innerText = "Valid phone";
        phoneerror.className = "valid";
    }
});

password.addEventListener("input", function () {
    let value = password.value;
    let strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if (value.length < 8) {
        passworderror.innerText = "Minimum 8 characters";
    }
    else if (!strong.test(value)) {
        passworderror.innerText = "Use upper, lower, number & special char";
    }
    else {
        passworderror.innerText = "Strong Password";
        passworderror.className = "valid"
    }
});


let count = 1;
document.getElementById("generatebtn").addEventListener("click", function () {
    let id = "INV-" + String(count).padStart(5, "0");
    let today = new Date().toLocaleDateString("en-IN");
    let input = document.getElementById("customer").value.trim();
    let formattedName = input
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    document.getElementById("invoiceId").innerText = "Invalid ID:" + id;
    document.getElementById("date").innerText = "Date:" + today;
    document.getElementById("name").innerText = "Name:" + formattedName;
    count++;
});