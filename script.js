function findSkill() {
    document.getElementById("skillInput").focus();
}

function searchSkill() {

    const skill = document.getElementById("skillInput").value.trim();

    const results = document.getElementById("results");

    if (skill === "") {
        results.innerHTML = "<p>Please enter a skill to search.</p>";
        return;
    }

    results.innerHTML = `
        <div class="result-card">
            <h3>🎯 ${skill} Skill Match</h3>
            <p><strong>Arun Kumar</strong> can teach ${skill}</p>
            <p>⭐ Match Score: <strong>92%</strong></p>
            <button onclick="connectStudent()">Connect</button>
        </div>
    `;
}

function connectStudent() {
    alert("Connection request sent successfully! 🤝");
}


function registerStudent() {
    alert("Register function is working!");

    const name = document.getElementById("studentName").value.trim();
    const department = document.getElementById("department").value.trim();
    const teachSkill = document.getElementById("teachSkill").value.trim();
    const learnSkill = document.getElementById("learnSkill").value.trim();

    const result = document.getElementById("registerResult");

    if (name === "" || department === "" || teachSkill === "" || learnSkill === "") {
        result.innerHTML = "<p>Please fill all the fields.</p>";
        return;
    }
localStorage.setItem("studentName", name);
localStorage.setItem("department", department);
localStorage.setItem("teachSkill", teachSkill);
localStorage.setItem("learnSkill", learnSkill);
    result.innerHTML = `
        <div class="result-card">
            <h3>🎉 Profile Created!</h3>
            <p>Welcome, <strong>${name}</strong>!</p>
            <p>Department: ${department}</p>
            <p>Can teach: ${teachSkill}</p>
            <p>Wants to learn: ${learnSkill}</p>
        </div>
    `;
}window.onload = function() {

    const savedName = localStorage.getItem("studentName");

    if (savedName) {
        document.getElementById("studentName").value = savedName;
        document.getElementById("department").value =
            localStorage.getItem("department");

        document.getElementById("teachSkill").value =
            localStorage.getItem("teachSkill");

        document.getElementById("learnSkill").value =
            localStorage.getItem("learnSkill");
    }
};window.onload = function() {

    const savedName = localStorage.getItem("studentName");

    if (savedName) {
        document.getElementById("studentName").value = savedName;
        document.getElementById("department").value =
            localStorage.getItem("department");

        document.getElementById("teachSkill").value =
            localStorage.getItem("teachSkill");

        document.getElementById("learnSkill").value =
            localStorage.getItem("learnSkill");
    }
};