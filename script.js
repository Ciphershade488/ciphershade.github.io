// Enroll Now Button Alert
function enrollNow() {
    alert("🎉 Enrollment Coming Soon! Stay Tuned!");
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// FAQ Toggle
function toggleFAQ(faqNumber) {
    var faq = document.getElementById("faq" + faqNumber);
    if (faq.style.display === "block") {
        faq.style.display = "none";
    } else {
        faq.style.display = "block";
    }
}
