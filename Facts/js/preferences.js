document.getElementById("saveBtn").addEventListener("click",()=>{

const preference={

role:document.getElementById("role").value,

location:document.getElementById("location").value,

salary:document.getElementById("salary").value,

workmode:document.getElementById("workmode").value,

employment:document.getElementById("employment").value,

shift:document.getElementById("shift").value

};

localStorage.setItem(
"jobPreference",
JSON.stringify(preference)
);

alert("Job Preferences Saved Successfully");

});

document
.getElementById("preferenceForm")
.addEventListener("submit",function(e){

e.preventDefault();

window.location.href="career-objective.html";

});