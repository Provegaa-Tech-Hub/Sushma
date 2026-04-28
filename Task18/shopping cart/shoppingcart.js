let totalPrice = 0;
let totalItems = 0;
function addtocart(price) {
    totalPrice += price;
    totalItems++;
    document.getElementById("total").innerText=totalPrice;
    document.getElementById("items").innerText=totalItems;
}