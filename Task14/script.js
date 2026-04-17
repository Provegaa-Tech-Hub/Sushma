let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let addbutton = document.getElementById("addbtn");
let subbutton = document.getElementById("subbtn");
let mulbutton = document.getElementById("mulbtn");
let divbutton = document.getElementById("divbtn");
let modbutton = document.getElementById("modbtn");
let result = document.getElementById("result");
addbutton.addEventListener("click", () => {
    let value1 = Number(num1.value);
    let value2 = Number(num2.value);

    let sum = value1 + value2;

    result.innerHTML = sum;
});
subbutton.addEventListener("click", () => {
    let value1 = Number(num1.value);
    let value2 = Number(num2.value);

    let sum = value1 - value2;

    result.innerHTML = sum;
});
mulbutton.addEventListener("click", () => {
    let value1 = Number(num1.value);
    let value2 = Number(num2.value);

    let sum = value1 * value2;

    result.innerHTML = sum;
});
divbutton.addEventListener("click", () => {
    let value1 = Number(num1.value);
    let value2 = Number(num2.value);

    let sum = value1 / value2;

    result.innerHTML = sum;
});
modbutton.addEventListener("click", () => {
    let value1 = Number(num1.value);
    let value2 = Number(num2.value);

    let sum = value1 % value2;

    result.innerHTML = sum;
});



