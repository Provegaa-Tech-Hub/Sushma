// Candidate Name
document.getElementById("candidateName").innerText =
localStorage.getItem("candidateName") || "Manga";

// Mock Result
const total = Number(localStorage.getItem("totalQuestions")) || 50;
const correct = Number(localStorage.getItem("correctAnswers")) || 40;
const wrong = total - correct;

const score = Math.round((correct / total) * 100);

let grade = "";
let performance = "";

if(score >= 90){
grade = "A+";
performance = "Outstanding";
}
else if(score >= 80){
grade = "A";
performance = "Excellent";
}
else if(score >= 70){
grade = "B";
performance = "Very Good";
}
else if(score >= 60){
grade = "C";
performance = "Good";
}
else if(score >= 50){
grade = "D";
performance = "Average";
}
else{
grade = "F";
performance = "Needs Improvement";
}

// Display Values

document.getElementById("totalQuestions").innerHTML = total;

document.getElementById("correctAnswers").innerHTML = correct;

document.getElementById("wrongAnswers").innerHTML = wrong;

document.getElementById("scorePercent").innerHTML = score + "%";

document.getElementById("circleScore").innerHTML = score + "%";

document.getElementById("grade").innerHTML = grade;

document.getElementById("performanceText").innerHTML = performance;

// Update Progress Circle

document.querySelector(".progress-circle").style.background =
`conic-gradient(#2563eb ${score}%, #ddd ${score}% 100%)`;

// Download Buttons

document.getElementById("downloadPDF").onclick = function(){

alert("PDF Download feature will be added in the next module.");

};

document.getElementById("downloadCertificate").onclick = function(){

window.location.href = "certificate.html";

};