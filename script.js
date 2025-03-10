document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("hackerModeToggle");
    if (button) {
        button.addEventListener("click", function() {
            document.body.classList.toggle("hacker-mode");
            console.log("Hacker Mode toggled!"); // Debugging message
        });
    } else {
        console.error("Button not found!"); // Debugging error
    }
});
