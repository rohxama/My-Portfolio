const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});

// JavaScript code to change text on hover and apply gradient background
const spanText = document.querySelector('.text');

document.querySelector('.hover-effect').addEventListener('mouseover', function() {
  spanText.textContent = "real-world problems"; // Change text on hover
  spanText.classList.add('text-hover'); // Apply gradient effect
});

document.querySelector('.hover-effect').addEventListener('mouseout', function() {
  spanText.textContent = "creative solutions"; // Revert text when hover ends
  spanText.classList.remove('text-hover'); // Remove gradient effect
});

