const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const btns = document.querySelectorAll('button');

inputText.addEventListener('input',()=> outputText.innerText = inputText.value)

btns.forEach(btn =>{
    btn.addEventListener('click',()=>{
        if(btn.classList.contains('upperCase')){
            outputText.style.textTransform = "uppercase";
        } else if(btn.classList.contains('lowerCase')){
            outputText.style.textTransform = "lowercase";
        }else if(btn.classList.contains('properCase')){
            outputText.style.textTransform = "capitalize";
        } else if(btn.classList.contains('Bold')){
            outputText.style.fontWeight = 'bold';
        } else if (btn.classList.contains('italic')){
            outputText.style.fontStyle = 'italic';
        } else if (btn.classList.contains('Underline')){
            outputText.style.textDecoration = 'underline'
        }else{
            outputText.style.textDecoration = 'none'
        }
    })
})