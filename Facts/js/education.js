const form = document.getElementById("educationForm");

document.getElementById("saveBtn").addEventListener("click", () => {

    const education = {

        qualification: document.getElementById("qualification").value,

        degree: document.getElementById("degree").value,

        branch: document.getElementById("branch").value,

        college: document.getElementById("college").value,

        university: document.getElementById("university").value,

        year: document.getElementById("year").value,

        percentage: document.getElementById("percentage").value,

        backlogs: document.getElementById("backlogs").value,

        skills: document.getElementById("skills").value

    };

    localStorage.setItem(
        "education",
        JSON.stringify(education)
    );

    alert("Education Details Saved Successfully");

});

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Moving to Experience Module");

    window.location.href="experience.html";

});