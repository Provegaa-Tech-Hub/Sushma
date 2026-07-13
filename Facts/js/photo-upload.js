const photo =
document.getElementById("photo");

const preview =
document.getElementById("previewImage");

photo.addEventListener("change",()=>{

const file = photo.files[0];

if(!file) return;

const allowed = [
"image/png",
"image/jpeg"
];

if(!allowed.includes(file.type)){

alert("Only PNG, JPG, and JPEG images are allowed.");

photo.value="";

return;

}

if(file.size > 2*1024*1024){

alert("Maximum file size is 2 MB.");

photo.value="";

return;

}

const reader = new FileReader();

reader.onload = function(e){

preview.src = e.target.result;

}

reader.readAsDataURL(file);

});

document.getElementById("saveBtn")
.addEventListener("click",()=>{

const file = photo.files[0];

if(!file){

alert("Please upload your passport-size photo.");

return;

}

localStorage.setItem(
"profilePhoto",
file.name
);

alert("Photo Uploaded Successfully");

});

document
.getElementById("photoForm")
.addEventListener("submit",function(e){

e.preventDefault();

window.location.href="jobs.html";

});