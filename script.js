document.querySelectorAll('.key').forEach(key => key.addEventListener('click', handleClick));
window.addEventListener('keydown', handleKeyBoard)
const textbox = document.querySelector('.input')

function handleKeyBoard(e){
    if (e.key === 'Enter'){return handleSubmit()}
    if (e.key === 'Backspace'){return handleBackspace()}
    else if (e.code.startsWith('Key') ) {return handleLetter(e.key.toUpperCase())}
}

function handleClick(e){
    console.log(e.target);
    if (e.target.innerHTML === 'ENTER') {return handleSubmit()}
    if (e.target.id === 'backspace') {return handleBackspace()}
    else {return handleLetter(e.target.innerHTML)}
}
let letterCount = 0
function handleLetter(letter){
    if (letterCount <5) {
        letterCount += 1;
        const div = document.getElementById(`letter${letterCount}`);
        div.innerHTML = letter;
    }
    
}

function handleSubmit(){
    const letters = document.querySelectorAll('.letter');
    if (letterCount === 5) {
        letters.forEach(letter => letter.innerHTML = '');
        letterCount = 0;
    }
    else (alert('Not enough letters'));
}
function handleBackspace(){
    if (letterCount > 0){
    const div = document.getElementById(`letter${letterCount}`);
    div.innerHTML = ''
    letterCount -= 1;
    }
}
