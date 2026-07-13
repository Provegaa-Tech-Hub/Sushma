const jobs=[

{
company:"Amazon",
role:"QA Engineer",
location:"Hyderabad",
experience:"3 Years",
salary:"8 LPA"
},

{
company:"Google",
role:"Software Tester",
location:"Bangalore",
experience:"2 Years",
salary:"12 LPA"
},

{
company:"Infosys",
role:"Manual Tester",
location:"Pune",
experience:"Fresher",
salary:"4 LPA"
},

{
company:"TCS",
role:"Automation Tester",
location:"Chennai",
experience:"4 Years",
salary:"9 LPA"
}

];

const grid=document.getElementById("jobGrid");

function displayJobs(list){

grid.innerHTML="";

list.forEach(job=>{

grid.innerHTML+=`

<div class="job-card">

<div class="company">${job.company}</div>

<div class="role">${job.role}</div>

<div class="details">

📍 ${job.location}<br>

💼 ${job.experience}<br>

💰 ${job.salary}

</div>

<div class="buttons">

<button class="apply"
onclick="applyJob('${job.company}')">

Apply

</button>

<button class="save"
onclick="saveJob('${job.company}')">

Save

</button>

</div>

</div>

`;

});

}

displayJobs(jobs);

document.getElementById("searchBtn")
.addEventListener("click",()=>{

const text=
document.getElementById("searchInput")
.value
.toLowerCase();

const filtered=jobs.filter(job=>

job.role.toLowerCase().includes(text) ||

job.company.toLowerCase().includes(text)

);

displayJobs(filtered);

});

function applyJob(company){

alert("Application Submitted to "+company);

}

function saveJob(company){

alert(company+" Job Saved");

}