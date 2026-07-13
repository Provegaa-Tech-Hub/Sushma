// ========================================
// CAREER PATH - JOB APPLICATION
// ========================================

// Form Elements
const form = document.getElementById("applicationForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const qualification = document.getElementById("qualification");
const city = document.getElementById("city");
const salary = document.getElementById("salary");
const skills = document.getElementById("skills");
const resume = document.getElementById("resume");
const resumeName = document.getElementById("resumeName");
const photo = document.getElementById("photo");
const photoPreview = document.getElementById("photoPreview");
const coverLetter = document.getElementById("coverLetter");
const wordCounter = document.getElementById("wordCounter");
const saveBtn = document.getElementById("saveBtn");

// ================================
// Auto Fill User Details
// ================================

window.onload = function () {

    const profile = JSON.parse(localStorage.getItem("profile")) || {};

    fullName.value = profile.name || "";
    email.value = profile.email || "";
    phone.value = profile.phone || "";
    qualification.value = profile.qualification || "";
    city.value = profile.city || "";
    salary.value = profile.expectedSalary || "";
    skills.value = profile.skills || "";
    coverLetter.value = profile.coverLetter || "";

    updateCounter();

};

// ================================
// Resume Upload
// ================================

resume.addEventListener("change", function () {

    if (resume.files.length > 0) {

        resumeName.innerHTML = resume.files[0].name;

    } else {

        resumeName.innerHTML = "No Resume Selected";

    }

});

// ================================
// Photo Preview
// ================================

photo.addEventListener("change", function () {

    if (photo.files.length > 0) {

        const reader = new FileReader();

        reader.onload = function (e) {

            photoPreview.src = e.target.result;

        };

        reader.readAsDataURL(photo.files[0]);

    }

});

// ================================
// Character Counter
// ================================

coverLetter.addEventListener("input", updateCounter);

function updateCounter() {

    wordCounter.innerHTML =
        coverLetter.value.length + " / 1000 Characters";

}

// ================================
// Save Draft
// ================================

saveBtn.addEventListener("click", function () {

    const draft = {

        name: fullName.value,
        email: email.value,
        phone: phone.value,
        qualification: qualification.value,
        city: city.value,
        expectedSalary: salary.value,
        skills: skills.value,
        coverLetter: coverLetter.value

    };

    localStorage.setItem("jobDraft", JSON.stringify(draft));

    alert("Draft Saved Successfully!");

});

// ================================
// Form Submit
// ================================

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Validation

    if (fullName.value.trim() === "") {

        alert("Enter Full Name");
        fullName.focus();
        return;

    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value)) {

        alert("Enter Valid Email Address");
        email.focus();
        return;

    }

    const phonePattern =
        /^[0-9]{10}$/;

    if (!phonePattern.test(phone.value)) {

        alert("Enter Valid Mobile Number");
        phone.focus();
        return;

    }

    if (qualification.value.trim() === "") {

        alert("Enter Qualification");
        qualification.focus();
        return;

    }

    // Store Application

    const application = {

        name: fullName.value,
        email: email.value,
        phone: phone.value,
        qualification: qualification.value,
        city: city.value,
        expectedSalary: salary.value,
        skills: skills.value,
        coverLetter: coverLetter.value,
        resume: resume.files.length > 0
            ? resume.files[0].name
            : "",
        photo: photo.files.length > 0
            ? photo.files[0].name
            : "",
        status: "Applied",
        appliedDate: new Date().toLocaleDateString()

    };

    localStorage.setItem(
        "jobApplication",
        JSON.stringify(application)
    );

    alert("Application Submitted Successfully!");

    window.location.href = "applied-jobs.html";

});
