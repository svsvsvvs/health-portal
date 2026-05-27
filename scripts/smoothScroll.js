const links = document.querySelectorAll('.navig');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const id = this.getAttribute('href').substring(1);
        const section = document.getElementById(id);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});