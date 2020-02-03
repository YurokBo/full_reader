function textSize(el, e) {

    const bookControl = el.closest('.book__control'),
        buttonActive = bookControl.querySelector('.font-size_active'),
        buttonSize = el.closest('.font-size'),
        content = document.querySelector('.book__content');

    if(!bookControl) {
        return;
    }

    content.className = 'book__content';

    buttonActive.classList.remove('font-size_active');
    buttonSize.closest('.font-size').classList.add('font-size_active');
    const {size} = buttonSize.dataset;
    content.classList.add(`font-size_${size}`);


    e.preventDefault();
}


function fonColor(el, e) {
    const bookControl = el.closest('.book__control_background'),
        buttonColorActive = bookControl.querySelector('.color_active'),
        buttonColor = el.closest('.color'),
        bookContent = document.querySelector('.book__content');

    if(!bookControl) {
        return;
    }

    bookContent.className = 'book__content';

    buttonColorActive.classList.remove('color_active');
    buttonColor.closest('.color').classList.add('color_active');
    const {color} = buttonColor.dataset;
    bookContent.classList.add(`color_${color}`);

    e.preventDefault();
}

function textColor(el, e) {
    const bookControl = el.closest('.book__control_color'),
        buttonActive = bookControl.querySelector('.color_active'),
        buttonColor = el.closest('.color'),
        bookContent = document.querySelector('.book__content');

    if(!bookControl) {
        return
    }

    bookContent.className = 'book__content';

    buttonActive.classList.remove('color_active');
    buttonColor.closest('.color').classList.add('color_active');
    const {color} = buttonColor.dataset;
    bookContent.classList.add(`book_color-${color}`);

    e.preventDefault();
}

document.addEventListener('click', e => {
    /* textSize(e.target, e);
       fonColor(e.target, e);  */
    textColor(e.target, e);

});


