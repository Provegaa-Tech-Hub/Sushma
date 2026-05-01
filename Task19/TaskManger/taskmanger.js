let tasks = [];
    let filter = "all";

    function addTask() {
        let input = document.getElementById("taskInput");
        let text = input.value;

        if (text === "") {
            alert("Enter a task");
            return;
        }

        tasks.push({ name: text, completed: false });
        input.value = "";
        displayTasks();
    }

    function displayTasks() {
        let list = document.getElementById("taskList");
        list.innerHTML = "";

        //  FOR LOOP USED HERE
        for (let i = 0; i < tasks.length; i++) {

            let task = tasks[i];

            // filter logic
            if (filter === "completed" && task.completed === false) {
                continue;
            }

            if (filter === "pending" && task.completed === true) {
                continue;
            }

            let li = document.createElement("li");

            let span = document.createElement("span");
            span.innerText = task.name;

            if (task.completed) {
                span.classList.add("completed");
            }

            // mark complete
            span.onclick = function () {
                tasks[i].completed = !tasks[i].completed;
                displayTasks();
            };

            // delete button
            let delBtn = document.createElement("button");
            delBtn.innerText = "Delete";

            delBtn.onclick = function () {
                tasks.splice(i, 1);
                displayTasks();
            };

            li.appendChild(span);
            li.appendChild(delBtn);
            list.appendChild(li);
        }
    }

    function filterTasks(type) {
        filter = type;
        displayTasks();
    }