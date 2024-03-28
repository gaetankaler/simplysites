//===== close navbar-collapse when a  clicked
let navbarTogglerNine = document.querySelector(".navbar-nine .navbar-toggler");
navbarTogglerNine.addEventListener("click", function () {
    navbarTogglerNine.classList.toggle("active");
});

// ===== Legal Notices Window
let mentionsLegalesLink = document.getElementById('mentions-legales');
let modal = document.getElementById('modal');
let mentionsLegalesCloseBtn = document.querySelector('#modal .close');


mentionsLegalesLink.addEventListener('click', function(event) {
event.preventDefault();
modal.style.display = 'block';
overlay.style.display = 'block'; // Displaying the overlay
document.body.style.overflow = 'hidden';
});

mentionsLegalesCloseBtn.addEventListener('click', function(event) {
event.stopPropagation();
modal.style.display = 'none';
overlay.style.display = 'none'; // Hiding the overlay
document.body.style.overflow = 'auto';
});

window.addEventListener('click', function(event) {
if (event.target == modal) {
    modal.style.display = 'none';
    overlay.style.display = 'none'; // Hiding the overlay
    document.body.style.overflow = 'auto';
}
});

// ===== Article Modal Window
// Retrieving all "Learn more" buttons
let buttons = document.querySelectorAll('.article-button');

let overlay = document.querySelector('.overlay');
// Retrieving all modals
let modals = document.querySelectorAll('.article-modal');

// Looping over each button
buttons.forEach(function(button, index) {
// Adding a click event listener
button.addEventListener('click', function() {
    // Closing all open modals
    closeAllModals();
    // Displaying the corresponding modal
    modals[index].style.display = "block";
     // Displaying the overlay
    overlay.style.display = "block";
    // Prevent scrolling of the main page
    document.body.style.overflow = 'hidden';
});
});

// Retrieving all close buttons
let closeButtons = document.querySelectorAll('.close');

// Looping over each close button
closeButtons.forEach(function(closeButton) {
// Adding a click event listener
closeButton.addEventListener('click', function() {
    // Closing the modal
    let modal = this.parentElement.parentElement.parentElement;
    modal.style.display = "none";
     // Hiding the overlay
    overlay.style.display = "none";
    // Restoring scrolling of the main page
    document.body.style.overflow = 'auto';
});
});

// Function to close all modals
function closeAllModals() {
modals.forEach(function(modal) {
    modal.style.display = "none";
});
}