const education =
JSON.parse(localStorage.getItem("education"));

const educationName =
document.getElementById("educationName");

const jobSuggestions =
document.getElementById("jobSuggestions");

let qualification = "";

if(education){

qualification =
education.qualification;

educationName.innerHTML =
qualification;

}else{

educationName.innerHTML =
"Not Available";

}

const jobData={

"B.Tech":[

"Software Tester",

"QA Engineer",

"Manual Tester",

"Automation Tester",

"Business Analyst"

],

"MCA":[

"Software Engineer",

"QA Engineer",

"Full Stack Developer",

"Java Developer",

"DevOps Engineer"

],

"MBA":[

"HR Executive",

"Business Analyst",

"Project Coordinator",

"Marketing Executive",

"Operations Manager"

],

"B.Com":[

"Accountant",

"Finance Executive",

"Tax Consultant",

"Banking Associate",

"Auditor"

],

"B.Sc":[

"Data Analyst",

"QA Tester",

"Lab Executive",

"Research Assistant",

"Technical Support"

]

};

const jobs =
jobData[qualification] ||

["Software Tester",
"QA Engineer",
"Technical Support"];

jobs.forEach(job=>{

jobSuggestions.innerHTML+=`

<div class="job-card">

<i class="fa-solid fa-briefcase"></i>

<h3>${job}</h3>

<p>

Recommended based on your education.

</p>

</div>

`;

});