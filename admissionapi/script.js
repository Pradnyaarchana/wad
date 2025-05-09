const apiUrl = "http://localhost:5000/api/students";

// Fetch all students
async function fetchStudents() {
    const response = await fetch(apiUrl);
    const students = await response.json();
    const studentList = document.getElementById("students");
    studentList.innerHTML = "";

    students.forEach((student) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${student.name} - ${student.course} (${student.status})</span>
            <button onclick="deleteStudent('${student._id}')" class="delete">Delete</button>
            <button onclick="updateStudent('${student._id}')" class="delete">Update Status</button>
        `;
        studentList.appendChild(li);
    });
}

// Add a new student
async function addStudent() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const course = document.getElementById("course").value;
    const status = document.getElementById("status").value;

    const student = { name, email, phone, course, status };

    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
    });

    if (response.ok) {
        fetchStudents();
        clearForm();
    } else {
        alert("Failed to add student");
    }
}

// Delete a student
async function deleteStudent(id) {
    const response = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
    });

    if (response.ok) {
        fetchStudents();
    } else {
        alert("Failed to delete student");
    }
}

// Update student status
async function updateStudent(id) {
    const newStatus = prompt("Enter new status (approved/rejected/pending):");
    if (newStatus) {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: newStatus }),
        });

        if (response.ok) {
            fetchStudents();
        } else {
            alert("Failed to update student");
        }
    }
}

// Clear the input fields
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("course").value = "";
    document.getElementById("status").value = "pending";
}

// Initial fetch of students
fetchStudents();
