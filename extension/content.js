// Wait for the DOM to fully load
window.addEventListener("DOMContentLoaded", () => {
    console.log("Content script loaded!");

    // Select the YouTube logo element by its ID
    const logoIcon = document.querySelector("#logo-icon");

    // Check if the logo icon exists on the page
    if (logoIcon) {
        console.log("Logo found, removing it.");
        // Remove the logo by setting its display to 'none'
        logoIcon.style.display = "none";
    } else {
        console.log("Logo not found.");
    }
});
// Function to remove the logo
function removeLogo() {
    const logoIcon = document.querySelector("#logo-icon");

    if (logoIcon) {
        logoIcon.style.display = "none";
        console.log("Logo removed.");
    } else {
        console.log("Logo not found.");
    }
}

// Use MutationObserver to detect changes in the DOM
const observer = new MutationObserver(() => {
    removeLogo();
});

// Start observing changes in the body of the document
observer.observe(document.body, { childList: true, subtree: true });

// Try to remove the logo immediately in case it's already loaded
removeLogo();
