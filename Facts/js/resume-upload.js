const resumeFile =
document.getElementById("resumeFile");

const preview =
document.getElementById("filePreview");

resumeFile.addEventListener("change",()=>{

const file = resumeFile.files[0];

if(!file){

preview.innerHTML="No file selected";

return;

}

const allowed = [
"application/pdf",

"application/msword",

"application/vnd.openxmlformats-officedocument.wordprocessingml.document"
];

if(!allowed.includes(file.type)){

alert("Only PDF, DOC, DOCX files are allowed.");

resumeFile.value="";

return;

}

if(file.size > 5*1024*1024){

alert("Maximum file size is 5 MB.");

resumeFile.value="";

return;

}

preview.innerHTML=
"<i class='fa-solid fa-file'></i> " + file.name;

});

document.getElementById("saveBtn")
.addEventListener("click",()=>{

const file=resumeFile.files[0];

if(!file){

alert("Please upload your resume.");

return;

}

localStorage.setItem(
"resumeName",
file.name
);

alert("Resume Uploaded Successfully");

});

document
.getElementById("resumeForm")
.addEventListener("submit",function(e){

e.preventDefault();

window.location.href="photo-upload.html";

});