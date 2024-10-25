const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function toggleSection(section) {
    // Toggle active class to show/hide content
    section.classList.toggle('active');
}

// You can also add click event listeners if you prefer
$$('.section').forEach(section => {
    section.addEventListener('click', () => {
        toggleSection(section);
    });
});


function toggleContent(element) {
    // Toggle active class on the section clicked
    element.classList.toggle("active");

    // Get the content list within the clicked section
    const content = element.querySelector(".content");

    // Toggle display of the content
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
