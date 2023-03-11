document.querySelectorAll('.key').forEach(key => key.addEventListener('click', handleClick));
window.addEventListener('keydown', handleKey)
const textbox = document.querySelector('.input')

function handleKey(e){
    if (e.key === 'Enter'){return handleSubmit()}
    if (e.key === 'Backspace'){return handleBackspace()}
    else {return handleLetter(e.key.toUpperCase())}
}

function handleClick(e){
    const textbox = document.querySelector('.input')
    if (e.target.innerHTML === 'Enter') {return handleSubmit()}
    if (e.target.innerHTML === 'Backspace') {return handleBackspace()}
    else {return handleLetter(e.target.innerHTML)}
    
}
function handleLetter(e){
    if (textbox.value.length >4) return
    else {textbox.value += e;}
}

function handleSubmit(){
    const textbox = document.querySelector('.input')
    if (textbox.value.length >4) {textbox.value = '';}
    else (console.log('not long enough'));
}
function handleBackspace(){
    const textbox = document.querySelector('.input')
    textbox.value = textbox.value.slice(0, -1)
}