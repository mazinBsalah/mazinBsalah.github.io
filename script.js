document.addEventListener("DOMContentLoaded", function() {
    const hackerButton = document.getElementById("hackerModeToggle");

    // Check localStorage and apply saved mode
    if (localStorage.getItem("theme-mode") === "hacker-mode") {
        document.body.classList.add("hacker-mode");
        console.log("Hacker Mode reapplied from localStorage");
    }

    function toggleMode() {
        if (document.body.classList.contains("hacker-mode")) {
            document.body.classList.remove("hacker-mode");
            localStorage.setItem("theme-mode", "normal-mode"); // Store normal mode
            console.log("Hacker Mode deactivated!");
        } else {
            document.body.classList.add("hacker-mode");
            localStorage.setItem("theme-mode", "hacker-mode"); // Save mode
            console.log("Hacker Mode activated and stored in localStorage!");
        }
    }

    if (hackerButton) {
        hackerButton.addEventListener("click", toggleMode);
    } else {
        console.error("Hacker Mode button not found!");
    }
});
