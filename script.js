document.addEventListener("DOMContentLoaded", function() {
    const hackerButton = document.getElementById("hackerModeToggle");

    // Apply saved mode from localStorage when page loads
    const savedMode = localStorage.getItem("theme-mode");
    if (savedMode) {
        document.body.classList.add(savedMode);
    }

    function activateMode(mode) {
        document.body.classList.remove("hacker-mode");
        document.body.classList.add(mode);
        localStorage.setItem("theme-mode", mode);
    }

    if (hackerButton) {
        hackerButton.addEventListener("click", function() {
            activateMode("hacker-mode");
            console.log("Hacker Mode activated!");
        });
    } else {
        console.error("Hacker Mode button not found!");
    }
});
