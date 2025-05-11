document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.getElementById("menu-toggle");
    var navbar = document.getElementById("navbar");
    var downloadCvButton = document.getElementById("download-cv");

    // Toggle navbar visibility
    menuToggle.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevents event from bubbling to the document
        navbar.classList.toggle("active"); // Show/hide navbar
    });

    // Hide navbar if clicked outside
    document.addEventListener("click", function(event) {
        if (!menuToggle.contains(event.target) && !navbar.contains(event.target)) {
            navbar.classList.remove("active"); // Hide navbar
        }
    });

    // Hide navbar when a menu item is clicked
    var menuItems = navbar.getElementsByTagName("a");
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", function() {
            navbar.classList.remove("active"); // Hide navbar on menu item click
        });
    }

    // CV Download functionality
    downloadCvButton.addEventListener("click", function(event) {
        var link = document.createElement("a");
        link.href = "resume.pdf"; // Ensure this path is correct
        link.download = "My_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
