// run when document is loaded
document.addEventListener("DOMContentLoaded", function(){
    // get number buttons, search button, clear button, input field, tip & ring
    const numberBtns = document.getElementsByClassName('number-btns');
    const searchBtn = document.getElementById('search-btn');
    const clearBtn = document.getElementById('clear-btn');
    let inputSearch = document.getElementById('input-search');
    const tip = document.getElementById('tip');
    const ring = document.getElementById('ring');


    // add click listeners to add numbers to search string
    for ( let i = 0; i < numberBtns.length; i++) {
        numberBtns[i].addEventListener('click', ()=> {
            inputSearch.value += numberBtns[i].getAttribute('data-number');
        });
    }    
    
    // logic for searching for correct pair 
    searchBtn.addEventListener('click', ()=> {
        let tipColor = '';
        let ringColor = '';

        const result = pairColors[inputSearch.value % 25];
        tipColor = result.split('-')[0];
        ringColor = result.split('-')[1];

        tip.style.background = tipColor;
        ring.style.background = ringColor;

        // tip.classList.add(tipColor);
        // ring.classList.add(ringColor);

    });

    // clear input
    clearBtn.addEventListener('click', () => inputSearch.value ='');

    // set pair combinations
    const pairColors = {
        0: 'violet-silver',
        1: 'white-blue',
        2: 'white-orange',
        3: 'white-green',
        4: 'white-brown',
        5: 'white-silver',
        6: 'red-blue',
        7: 'red-orange',
        8: 'red-green',
        9: 'red-brown',
        10: 'red-silver',
        11: 'black-blue',
        12: 'black-orange',
        13: 'black-green',
        14: 'black-brown',
        15: 'black-silver',
        16: 'yellow-blue',
        17: 'yellow-orange',
        18: 'yellow-green',
        19: 'yellow-brown',
        20: 'yellow-silver',
        21: 'violet-blue',
        22: 'violet-orange',
        23: 'violet-green',
        24: 'violet-brown'
    }

    



});