document.addEventListener("DOMContentLoaded", function() {
    const hackerButton = document.getElementById("hackerModeToggle");

    // Apply saved mode from localStorage when page loads
    const savedMode = localStorage.getItem("theme-mode");
    if (savedMode === "hacker-mode") {
        document.body.classList.add("hacker-mode");
    }

    function toggleMode() {
        if (document.body.classList.contains("hacker-mode")) {
            document.body.classList.remove("hacker-mode");
            localStorage.removeItem("theme-mode");
            console.log("Hacker Mode deactivated!");
        } else {
            document.body.classList.add("hacker-mode");
            localStorage.setItem("theme-mode", "hacker-mode");
            console.log("Hacker Mode activated!");
        }
    }

    if (hackerButton) {
        hackerButton.addEventListener("click", toggleMode);
    } else {
        console.error("Hacker Mode button not found!");
    }
});