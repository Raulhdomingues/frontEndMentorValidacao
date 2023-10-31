const botoes = document.querySelectorAll('button');
const firstName = document.querySelector('.nome');
const lastName = document.querySelector('.sobrenome');
const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
const inputs = document.querySelectorAll('input');

function enviado() {
    let vazio = false;

    inputs.forEach((input) => {
        if (input.value == "") {
            vazio = true;
        }
    });


    if (vazio) {
        alert('Por favor, preencha todos os campos!');
    }
}

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (e) => {
    
    if (!/[a-z]/.test(senha.value) || !/[A-Z]/.test(senha.value) || !/[0-9]/.test(senha.value)) {
        alert('A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número.');
    } else if (!/[@#$%^&+=]/.test(senha.value)) {
        alert('A senha deve conter caracteres especiais!');
    }
    
    e.preventDefault();
})
    
