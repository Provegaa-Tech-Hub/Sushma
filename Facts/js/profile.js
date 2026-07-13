// =========================================
// CAREER PATH - PROFILE
// =========================================

// Run when page loads
window.onload = function () {

    loadProfile();

    loadEducation();

    loadExperience();

    loadMockTest();

    loadApplication();

};
localStorage.setItem("profile", JSON.stringify({
    name: "Manga",
    email: "manga@gmail.com",
    phone: "9876543210",
    city: "Hyderabad",
    role: "Software Tester",
    photo: "images/profile.jpg"
}));

// =========================================
// Load Profile Details
// =========================================

function loadProfile() {

    const profile =
        JSON.parse(localStorage.getItem("profile")) || {};

    document.getElementById("userName").innerHTML =
        profile.name || "Manga";

    document.getElementById("fullName").innerHTML =
        profile.name || "-";

    document.getElementById("email").innerHTML =
        profile.email || "-";

    document.getElementById("phone").innerHTML =
        profile.phone || "-";

    document.getElementById("city").innerHTML =
        profile.city || "-";

    document.getElementById("userRole").innerHTML =
        profile.role || "Software Tester";

    if (profile.photo) {

        document.getElementById("profilePhoto").src =
            profile.photo;

    }

}

// =========================================
// Load Education
// =========================================

function loadEducation() {

    const education =
        JSON.parse(localStorage.getItem("education")) || {};

    document.getElementById("qualification").innerHTML =
        education.qualification || "-";

    document.getElementById("degree").innerHTML =
        education.degree || "-";

    document.getElementById("branch").innerHTML =
        education.branch || "-";

    document.getElementById("passingYear").innerHTML =
        education.passingYear || "-";

}

// =========================================
// Load Experience
// =========================================

function loadExperience() {

    const experience =
        JSON.parse(localStorage.getItem("experience")) || {};

    document.getElementById("experience").innerHTML =
        experience.type || "Fresher";

    document.getElementById("skills").innerHTML =
        experience.skills || "-";

    document.getElementById("salary").innerHTML =
        experience.expectedSalary || "-";

}

// =========================================
// Load Resume
// =========================================

const application =
    JSON.parse(localStorage.getItem("jobApplication")) || {};

document.getElementById("resumeName").innerHTML =
    application.resume || "Resume Not Uploaded";

// =========================================
// Load Mock Test
// =========================================

function loadMockTest() {

    const total =
        Number(localStorage.getItem("totalQuestions")) || 50;

    const correct =
        Number(localStorage.getItem("correctAnswers")) || 40;

    const score =
        Math.round((correct / total) * 100);

    document.getElementById("score").innerHTML =
        score + "%";

    let grade = "F";

    if (score >= 90)
        grade = "A+";
    else if (score >= 80)
        grade = "A";
    else if (score >= 70)
        grade = "B";
    else if (score >= 60)
        grade = "C";
    else if (score >= 50)
        grade = "D";

    document.getElementById("grade").innerHTML =
        grade;

}

// =========================================
// Load Applied Jobs
// =========================================

function loadApplication() {

    const application =
        JSON.parse(localStorage.getItem("jobApplication"));

    if (!application) return;

    const tbody =
        document.getElementById("appliedJobs");

    tbody.innerHTML = `

<tr>

<td>Amazon</td>

<td>QA Engineer</td>

<td class="status applied">

${application.status}

</td>

</tr>

`;

}

// =========================================
// Resume Download
// =========================================

document
    .getElementById("downloadResume")
    .addEventListener("click", function () {

        if (application.resume) {

            alert(
                "Resume : " +
                application.resume
            );

        } else {

            alert("Resume not uploaded.");

        }

    });

// =========================================
// Certificate
// =========================================

document
    .getElementById("viewCertificate")
    .addEventListener("click", function () {

        window.location.href =
            "certificate.html";

    });

// =========================================
// Edit Profile
// =========================================

document
    .getElementById("editBtn")
    .addEventListener("click", function () {

        window.location.href =
            "dashboard.html";

    });

document
    .getElementById("editProfileBtn")
    .addEventListener("click", function () {

        window.location.href =
            "dashboard.html";

    });

// =========================================
// Logout
// =========================================

document
    .getElementById("logoutBtn")
    .addEventListener("click", function () {

        const confirmLogout =
            confirm("Are you sure you want to logout?");

        if (confirmLogout) {

            localStorage.removeItem("loggedInUser");

            window.location.href = "index.html";

        }

    });