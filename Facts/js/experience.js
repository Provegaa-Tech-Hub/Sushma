const fresherSection =
document.getElementById("fresherSection");

const experiencedSection =
document.getElementById("experiencedSection");

const radios =
document.querySelectorAll("input[name='type']");

radios.forEach(radio=>{

radio.addEventListener("change",()=>{

if(radio.value==="fresher" && radio.checked){

fresherSection.style.display="block";

experiencedSection.style.display="none";

}
else{

fresherSection.style.display="none";

experiencedSection.style.display="block";

}

});

});

document.getElementById("saveBtn").addEventListener("click",()=>{

const type =
document.querySelector("input[name='type']:checked").value;

let data={type:type};

if(type==="fresher"){

data.internship =
document.getElementById("internship").value;

data.projects =
document.getElementById("projects").value;

}
else{

data.company =
document.getElementById("company").value;

data.designation =
document.getElementById("designation").value;

data.experience =
document.getElementById("experience").value;

data.currentSalary =
document.getElementById("currentSalary").value;

data.expectedSalary =
document.getElementById("expectedSalary").value;

data.notice =
document.getElementById("notice").value;

data.skills =
document.getElementById("skills").value;

}

localStorage.setItem(
"experience",
JSON.stringify(data)
);

alert("Experience Details Saved Successfully");

});

document
.getElementById("experienceForm")
.addEventListener("submit",function(e){

e.preventDefault();

window.location.href="preferences.html";

});