const education=JSON.parse(localStorage.getItem("education"));

const experience=JSON.parse(localStorage.getItem("experience"));

const preference=JSON.parse(localStorage.getItem("jobPreference"));

document.getElementById("education").innerHTML=
education.qualification;

document.getElementById("experience").innerHTML=
experience.type;

document.getElementById("role").innerHTML=
preference.role;

let questions=[];

if(preference.role==="Software Tester"){

questions=[

{

q:"What is STLC?",

options:[
"Software Testing Life Cycle",
"System Test Life Cycle",
"Software Technical Life Cycle",
"None"
],

answer:0

},

{

q:"Which testing is done without source code?",

options:[
"White Box",
"Black Box",
"Unit Testing",
"Regression"
],

answer:1

},

{

q:"What is Smoke Testing?",

options:[
"Initial Build Testing",
"Performance Testing",
"Security Testing",
"Database Testing"
],

answer:0

}

];

}

let current=0;

let answers=[];

function loadQuestion(){

let q=questions[current];

document.getElementById("questionNo").innerHTML="Question "+(current+1);

document.getElementById("question").innerHTML=q.q;

let html="";

q.options.forEach((option,index)=>{

html+=`

<label class="option">

<input type="radio"

name="answer"

value="${index}"

${answers[current]==index?'checked':''}>

${option}

</label>

`;

});

document.getElementById("options").innerHTML=html;

}

loadQuestion();

document.getElementById("nextBtn").onclick=()=>{

saveAnswer();

if(current<questions.length-1){

current++;

loadQuestion();

}

}

document.getElementById("prevBtn").onclick=()=>{

saveAnswer();

if(current>0){

current--;

loadQuestion();

}

}

function saveAnswer(){

let selected=document.querySelector('input[name="answer"]:checked');

if(selected){

answers[current]=Number(selected.value);

}

}

document.getElementById("submitBtn").onclick=()=>{

saveAnswer();

localStorage.setItem("answers",JSON.stringify(answers));

window.location="score-card.html";

}