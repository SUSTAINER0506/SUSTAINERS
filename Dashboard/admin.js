document.addEventListener("DOMContentLoaded", () => {
    // const userData = [
    //     { username: "user1", applianceType: "Air Conditioner", model: "AC-Model-X1", energy: 1600, water: 0, duration: 4.0, avgTemp: 22.0, roomTemp: 30.0, timestamp: "2024-08-28 17:51:42" },
    //     { username: "user1", applianceType: "Refrigerator", model: "RF-Model-Z3", energy: 125, water: 0, duration: 24.0, avgTemp: 4.0, roomTemp: 25.0, timestamp: "2024-08-28 17:54:16" },
    //     { username: "user1", applianceType: "Washing Machine", model: "WM-Model-Y2", energy: 500, water: 150, duration: 1.5, avgTemp: 0.0, roomTemp: 0.0, timestamp: "2024-08-28 18:36:00" },
    //     { username: "user2", applianceType: "Air cooler", model: "DC-Model-W4", energy: 250, water: 20, duration: 5.0, avgTemp: 25.0, roomTemp: 35.0, timestamp: "2024-08-30 10:44:29" },
    //     { username: "user2", applianceType: "Refrigerator", model: "RF-Model-Z3", energy: 125, water: 0, duration: 24.0, avgTemp: 3.0, roomTemp: 26.0, timestamp: "2024-08-30 10:45:24" },
    //     { username: "user3", applianceType: "Washing machine", model: "WM-Model-Y2", energy: 600, water: 120, duration: 2.0, avgTemp: 0.0, roomTemp: 0.0, timestamp: "2024-08-30 10:47:10" },
    //     { username: "user4", applianceType: "Air Conditioner", model: "AC-Model-X1", energy: 1500, water: 0, duration: 5.0, avgTemp: 24.0, roomTemp: 29.0, timestamp: "2024-08-30 22:46:10" },
    //     { username: "user4", applianceType: "Washing Machine", model: "WM-Model-Y2", energy: 500, water: 150, duration: 2.0, avgTemp: 30.0, roomTemp: 30.0, timestamp: "2024-08-30 22:47:15" }
    // ];

    const tableBody = document.getElementById("userDataTable");

    userData.forEach(data => {
        const row = document.createElement("tr");

        Object.values(data).forEach(text => {
            const cell = document.createElement("td");
            cell.textContent = text;
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    document.getElementById("backButton").addEventListener("click", () => {
        window.history.back();
    });
});

document.querySelector('.logout-button').addEventListener('click', function() {
    // Redirect to login.html when "Logout" is clicked
    window.location.href = 'login.html'; // Change this to the actual path of login.html
});




function showSection(sectionId) {
    // Hide all sections
    document.getElementById('user-data-section').style.display = 'none';
    document.getElementById('user-feedback-section').style.display = 'none';

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Event listeners for navigation buttons
document.getElementById('viewDataButton').addEventListener('click', function () {
    showSection('user-data-section');
});

document.getElementById('viewFeedbackButton').addEventListener('click', function () {
    showSection('user-feedback-section');
});

window.onload = function () {
    showSection('user-data-section');
};


document.addEventListener("DOMContentLoaded", () => {
    const userData = [
        { username: "Manish Oberoi", applianceType: "Air Conditioner", model: "GPD 12PRO3WTA", energy: 1000, water: 0, duration: 4.0, avgTemp: 22.0, date: "2024-08-15" },
        { username: "Manish Oberoi", applianceType: "Refrigerator", model: "RD Edge Pro 190L", energy: 164, water: 0, duration: 24.0, avgTemp: 4.0, date: "2024-09-18" },
        { username: "Manish Oberoi", applianceType: "Washing Machine", model: "Godrej WS 800 PD 8 kg", energy: 250, water: 100, duration: 2, avgTemp: 0.0, date: "2024-08-28" },
        { username: "Raj Sharma", applianceType: "Air cooler", model: "Godrej Desert Air Cooler 45L", energy: 140, water: 10, duration: 5.0, avgTemp: 25.0, date: "2024-08-30" },
        { username: "Raj Sharma", applianceType: "Refrigerator", model: "Eon Side-by-Side 605L", energy: 435, water: 0, duration: 24.0, avgTemp: 3.0, date: "2024-09-20" },
        { username: "Karan Singh", applianceType: "Washing machine", model: "Godrej WF EON 600 PAW 6 kg", energy: 120, water: 45, duration: 2.0, avgTemp: 0.0, date: "2024-09-28" },
        { username: "Rohit Karda", applianceType: "Air Conditioner", model: "GIC 24INV5-WTA 2 Ton", energy: 700, water: 0, duration: 5.0, avgTemp: 24.0, date: "2024-09-30" },
    ];

    const userFeedback = [
        { name: "Manish Oberoi", email: "manishoberoi@gmail.com", feedback: "The website has a clean and modern design." },
        { name: "Raj Sharma", email: "sharma625@gmail.com", feedback: "The website had a visually appealing layout, with a balanced use of color and typography. I enjoyed the minimalistic design, which wasn't overwhelming but still engaging. The images and graphics enhanced the browsing experience without being distracting." },
        { name: "Karan Singh", email: "karansingh@gmail.com", feedback: "Itoffered some great features, such as detailed product filtering options and helpful recommendations." },
        { name: "Rohit Karda", email: "kardarohit001@gmail.com", feedback: "The pages loaded quickly, and I didn't encounter any performance issues, which made browsing smooth and hassle-free." }
    ];

    const tableBody = document.getElementById("userDataTable");

    userData.forEach(data => {
        const row = document.createElement("tr");

        Object.values(data).forEach(text => {
            const cell = document.createElement("td");
            cell.textContent = text;
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    const feedbackSection = document.getElementById("user-feedback-section");
    feedbackSection.innerHTML = ""; // Clear previous content if any

    userFeedback.forEach(feedback => {
        const feedbackDiv = document.createElement("div");
        feedbackDiv.classList.add("feedback-message");

        const namePara = document.createElement("p");
        namePara.innerHTML = `<strong>Name:</strong> ${feedback.name}`;

        const emailPara = document.createElement("p");
        emailPara.innerHTML = `<strong>Email:</strong> ${feedback.email}`;

        const feedbackPara = document.createElement("p");
        feedbackPara.innerHTML = `<strong>Feedback:</strong> ${feedback.feedback}`;

        feedbackDiv.appendChild(namePara);
        feedbackDiv.appendChild(emailPara);
        feedbackDiv.appendChild(feedbackPara);

        feedbackSection.appendChild(feedbackDiv);
    });

    document.getElementById("backButton").addEventListener("click", () => {
        window.history.back();
    });
});
