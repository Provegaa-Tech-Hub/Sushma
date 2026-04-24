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