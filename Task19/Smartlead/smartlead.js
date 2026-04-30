let email = document.getElementById("email");
let phone = document.getElementById("phone");
let emailerror = document.getElementById("emailerror");
let phoneerror = document.getElementById("phoneerror");

phone.addEventListener("input", function () {
    let value = phone.value.replace(/\D/g, "");
    if (value.length !== 10) {
        phoneerror.innerText = "Enter 10 digit number";
    }
    else {
        phoneerror.innerText = "Valid phone";
        phoneerror.className = "valid";
    }
});

email.addEventListener("input", function () {
    let value = email.value;
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === "") {
        emailerror.innerText = "Email is required";
    }
    else if (!pattern.test(value)) {
        emailerror.innerText = "Invalid email format";
    }
    else {
        emailerror.innerText = "Valid email";
        emailerror.className = "valid";
    }
});

function getleads() {
    return JSON.parse(localStorage.getItem("leads")) || [];
}

function saveLeads(leads) {
    localStorage.setItem("leads", JSON.stringify(leads));
}

function addButton() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if (!name || !email || !phone) {
        alert("Please fill all fields");
        return;
    }

    let leads = getleads();

    leads.push({
        name,
        email,
        phone,
        status: "new",
        createAt: new Date().toLocaleString()
    });

    saveLeads(leads);
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";

    addLeads();
}

function deleteLead(index) {
    let leads = getleads();
    leads.splice(index, 1);
    saveLeads(leads);
    addLeads();

}

function updateStatus(index, newStatus) {
    let leads = getleads();
    leads[index].status = newStatus;
    saveLeads(leads);
    addLeads();
}

function addLeads() {
    let leads = getleads();
    let table = document.getElementById("leadTable");


    let search = document.getElementById("search").value.toLowerCase();
    let filter = document.getElementById("filter").value;

    table.innerHTML = "";



    leads.forEach((lead, index) => {
        if (
            (lead.name.toLowerCase().includes(search) ||       
                lead.email.toLowerCase().includes(search)) &&
            (filter === "all" || lead.status === filter)
        ) {
            let row =`
                <tr>
                <td>${index + 1}</td>
                    <td>${lead.name}</td>
                    <td>${lead.email}</td>
                    <td>${lead.phone}</td>
                    <td class="status-${lead.status.toLowerCase()}">
                        ${lead.status}
                    </td>
                    <td>
                        <select onchange="updateStatus(${index}, this.value)">
                            <option ${lead.status === "New" ? "selected" : ""}>New</option>
                            <option ${lead.status === "Contacted" ? "selected" : ""}>Contacted</option>
                            <option ${lead.status === "Closed" ? "selected" : ""}>Closed</option>
                        </select>
                        <button class="action-btn" onclick="deleteLead(${index})">Delete</button>
                    </td>
                </tr>
            `;
            table.innerHTML += row;
        }
    });
}

addLeads();