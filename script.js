// Dummy Complaint Data
const complaints = [
    {
        id: 1,
        category: "Electrical",
        description: "Street light not working",
        priority: "High",
        status: "Open"
    },
    {
        id: 2,
        category: "Water",
        description: "Water leakage in parking",
        priority: "Medium",
        status: "In Progress"
    },
    {
        id: 3,
        category: "Cleaning",
        description: "Garbage not collected",
        priority: "Low",
        status: "Resolved"
    }
];

// Dummy Notices
const notices = [
    {
        title: "Water Supply Shutdown",
        description: "Water supply will be unavailable on Sunday from 10 AM to 2 PM."
    },
    {
        title: "Society Meeting",
        description: "Annual society meeting on Saturday at 6 PM."
    }
];

// Display Complaints
function displayComplaints() {

    const table = document.getElementById("complaintTable");

    if (!table) return;

    complaints.forEach((complaint) => {

        const row = `
        <tr>
            <td>${complaint.id}</td>
            <td>${complaint.category}</td>
            <td>${complaint.description}</td>
            <td>${complaint.priority}</td>
            <td>${complaint.status}</td>
        </tr>
        `;

        table.innerHTML += row;
    });

}

// Display Notices
function displayNotices() {

    const noticeSection = document.getElementById("noticeBoard");

    if (!noticeSection) return;

    notices.forEach((notice) => {

        const div = document.createElement("div");

        div.className = "notice";

        div.innerHTML = `
            <h3>${notice.title}</h3>
            <p>${notice.description}</p>
        `;

        noticeSection.appendChild(div);

    });

}

// Dummy Login
function login() {

    alert("Login Successful!");

}

// Dummy Complaint Submit
function submitComplaint() {

    alert("Complaint Submitted Successfully!");

}

// Dummy Update Complaint
function updateComplaint() {

    alert("Complaint Updated!");

}

// Dummy Post Notice
function postNotice() {

    alert("Notice Posted!");

}

// Load Data
window.onload = function () {

    displayComplaints();
    displayNotices();

};
