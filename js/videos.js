// Get the popup element
const popupDiv = document.getElementById("popupDiv");
const popupDivVid = document.getElementById("popupDivVid");
const popupDivVid1 = document.getElementById("popupDivVid1");
// Get the link to open the popup
const showPopupLink = document.getElementById("showPopup");
const showPopupLinkVid = document.getElementById("showPopupVid");
const showPopupLinkVid1 = document.getElementById("showPopupVid1");
// Get the close button
const closePopup = document.getElementById("closePopup");
const closePopupVid = document.getElementById("closePopupVid");
const closePopupVid1 = document.getElementById("closePopupVid1");
// Show the popup when the link is clicked
showPopupLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    popupDiv.style.display = "flex"; // Show the popup
});
showPopupLinkVid.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    popupDivVid.style.display = "flex"; // Show the popup
});
showPopupLinkVid1.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    popupDivVid1.style.display = "flex"; // Show the popup
});

// Close the popup when the close button is clicked
closePopup.addEventListener("click", function() {
    popupDiv.style.display = "none"; // Hide the popup
});
closePopupVid.addEventListener("click", function() {
    popupDivVid.style.display = "none"; // Hide the popup
});
closePopupVid1.addEventListener("click", function() {
    popupDivVid1.style.display = "none"; // Hide the popup
});

// Close the popup if the user clicks outside the content area
window.addEventListener("click", function(event) {
    if (event.target === popupDiv) {
        popupDiv.style.display = "none";
    }
});
window.addEventListener("click", function(event) {
    // Close the popup if anywhere on the popupDiv (overlay) is clicked
    if (event.target === popupDiv) {
        popupDiv.style.display = "none"; // Hide the popup
    }
});
window.addEventListener("click", function(event) {
    // Close the popup if anywhere on the popupDiv (overlay) is clicked
    if (event.target === popupDivVid) {
        popupDivVid.style.display = "none"; // Hide the popup
    }
});
window.addEventListener("click", function(event) {
    // Close the popup if anywhere on the popupDiv (overlay) is clicked
    if (event.target === popupDivVid1) {
        popupDivVid1.style.display = "none"; // Hide the popup
    }
});
