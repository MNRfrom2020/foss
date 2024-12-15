document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('a');
    links.forEach(function (link) {
        link.setAttribute('target', '_blank');
    });

    var currentYear = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = currentYear;
});




        document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search-bar'); // Ensure the ID matches
    const blocks = document.querySelectorAll('.box'); // Targets all blocks

    searchBar.addEventListener('input', function () {
        const query = searchBar.value.toLowerCase(); // Get input value and convert to lowercase

        blocks.forEach(block => {
            const blockTitle = block.querySelector('h3').textContent.toLowerCase(); // Get block title
            const appTitles = Array.from(block.querySelectorAll('summary span:first-child'))
                                   .map(span => span.textContent.toLowerCase()); // Get app titles
            
            // Check if query matches block title or any app title
            const matches = blockTitle.includes(query) || appTitles.some(appTitle => appTitle.includes(query));

            // Show or hide block based on match
            if (matches) {
                block.classList.remove('hidden');
            } else {
                block.classList.add('hidden');
            }
        });
    });
});
