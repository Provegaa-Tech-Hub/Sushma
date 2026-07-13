const togglePassword =
document.getElementById("togglePassword");

const password =
document.getElementById("password");

togglePassword.addEventListener("click",()=>{

    const type =
    password.getAttribute("type")==="password"
    ? "text"
    : "password";

    password.setAttribute("type",type);

    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");

});

document
.getElementById("loginForm")
.addEventListener("submit",function(e){

    e.preventDefault();

    const email=document.getElementById("email").value;

    const password=document.getElementById("password").value;

    if(email==="" || password===""){

        alert("Please enter Email and Password");

        return;

    }

    

    window.location.href="dashboard.html";

});