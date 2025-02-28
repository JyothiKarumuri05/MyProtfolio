
document.addEventListener("DOMContentLoaded", function () {
    var tablinks = document.querySelectorAll(".tab-links");
    var tabcontents = document.querySelectorAll(".tab-contents");

    tablinks.forEach(tab => {
        tab.addEventListener("click", function () {
            let tabname = this.getAttribute("data-tab");

            // Remove "active-link" from all tabs
            tablinks.forEach(t => t.classList.remove("active-link"));

            // Remove "active-tab" from all tab contents
            tabcontents.forEach(c => c.classList.remove("active-tab"));

            // Add "active-link" to the clicked tab
            this.classList.add("active-link");

            // Add "active-tab" to the corresponding content
            document.getElementById(tabname).classList.add("active-tab");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjust for navbar height
                    behavior: "smooth"
                });
            }
        });
    });
});

