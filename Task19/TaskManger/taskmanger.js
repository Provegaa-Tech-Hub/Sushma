function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = taskText;

    // Mark complete
    span.onclick = function () {
        span.classList.toggle("completed");
    };

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);  //Adds <li> into <ul>

    input.value = ""; // clear input
}

function filterTasks(type) {
    let tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(function (task) {
        let text = task.querySelector("span");

        if (type === "all") {
            task.style.display = "flex";
        } 
        else if (type === "completed") {
            task.style.display = text.classList.contains("completed") ? "flex" : "none";
        } 
        else if (type === "pending") {
            task.style.display = !text.classList.contains("completed") ? "flex" : "none";
        }
    });
}