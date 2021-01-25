const seeMoreBtn = document.querySelector('#see-more-btn');
const about = document.querySelector('#about');
const dialogueContainers = document.querySelectorAll('.dialogue-container');
const body = document.querySelector('body');

seeMoreBtn.addEventListener('click', () => {

    body.style.overflow = 'auto';

    for (let i = 0; i < dialogueContainers.length; i++) {
        setTimeout(()=> {
            dialogueContainers[i].style.display = 'block'; 
            if (i < 2) {
                dialogueContainers[i].scrollIntoView({behavior: 'smooth'});
            }           
        }, 2000 * i);
    }    
});
