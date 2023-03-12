document.querySelectorAll('.key').forEach(key => key.addEventListener('click', handleClick));
window.addEventListener('keydown', handleKeyBoard)
const textbox = document.querySelector('.input')

function handleKeyBoard(e){
    if (e.key === 'Enter'){return handleSubmit()}
    if (e.key === 'Backspace'){return handleBackspace()}
    else if (e.code.startsWith('Key') ) {return handleLetter(e.key.toUpperCase())}
}

function handleClick(e){
    const textbox = document.querySelector('.input')
    if (e.target.innerHTML === 'ENTER') {return handleSubmit()}
    if (e.target) {return handleBackspace()}
    else {return handleLetter(e.target.innerHTML)}
}
function handleLetter(letter){
    if (textbox.value.length >4) return
    else {textbox.value += letter;}
}

function handleSubmit(){
    const textbox = document.querySelector('.input')
    if (textbox.value.length >4) {textbox.value = '';}
    else (alert('Not enough letters'));
}
function handleBackspace(){
    const textbox = document.querySelector('.input')
    textbox.value = textbox.value.slice(0, -1)
}