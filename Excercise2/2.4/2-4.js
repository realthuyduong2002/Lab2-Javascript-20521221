// Get the link element
const hoverLink = document.getElementById('hoverLink');

// Get all the bold elements in the text
const boldText = document.querySelectorAll('strong');

// Event listener for hover over the link
hoverLink.addEventListener('mouseover', function() {
    // Highlight bold words in the text
    boldText.forEach(function(element) {
        element.classList.add('highlight');
    });
});

// Event listener for mouse leaving the link
hoverLink.addEventListener('mouseout', function() {
    // Remove the highlight from bold words
    boldText.forEach(function(element) {
        element.classList.remove('highlight');
    });
});
