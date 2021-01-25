const submitBtn = document.querySelector('#submit-btn');
const form = document.querySelector('form');
const contactTitle = document.querySelector('#contact-title');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault(); // no more refreshed page
    contactTitle.innerText = 'Dropped ;)';
    form.classList.add('dropped');
});