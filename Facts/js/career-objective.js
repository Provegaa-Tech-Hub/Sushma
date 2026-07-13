const textarea =
document.getElementById("objective");

const counter =
document.getElementById("wordCount");

textarea.addEventListener("input",()=>{

const words = textarea.value
.trim()
.split(/\s+/)
.filter(word=>word.length>0);

counter.innerHTML =
"Words : " + words.length + " / 300";

if(words.length>300){

textarea.value = words
.slice(0,300)
.join(" ");

counter.innerHTML="Words : 300 / 300";

}

});

document.getElementById("saveBtn")
.addEventListener("click",()=>{

localStorage.setItem(
"careerObjective",
textarea.value
);

alert("Career Objective Saved Successfully");

});

document
.getElementById("objectiveForm")
.addEventListener("submit",function(e){

e.preventDefault();

window.location.href="resume-upload.html";

});