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
    let keyword = document.getElementById("highlightsearch").value;//user input
    let textElement = document.getElementById("text");

    // reads paragraph text
    if (keyword === "") {
        textElement.innerHTML = originalText;
        return;
    }

    let regex = new RegExp(`(${keyword})`, "gi");//g->global(allmatches) i->case -insensitive

    textElement.innerHTML = originalText.replace(regex, '<span class="highlight">$1</span>');//wraps matched word in <span>
    //textElement.innerText = newText;// displays highlighted text

}


