const botoes = document.querySelectorAll('button');
const firstName = document.querySelector('.nome');
const lastName = document.querySelector('sobrenome');
const email = document.querySelector('.email');
const senha = document.querySelector('.senha').value;
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

    if(firstName.value == '' || lastName.value == '' || email.value == '') {
        alert('Porfavor, Preencha os campos!')
    }


    if(![a-z].test(senha) && ![A-Z].test(senha) && ![0-9].test(senha)){
        alert('A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número.')
    } else if(!/[@#$%^&+=]/.test(senha)) {
        alert('A senha deve conter caracteres especiais!')
    }
}


