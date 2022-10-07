function validar() {
    var email = document.getElementById('email').value;

    var comp = /\S+@\S+\.\S/;

    if (email == '') {
        alert("Preencha o e-mail!");
    } else {
        switch (comp.test(email)) {
            case true:
                alert("Digite um email válido!");
                break

            case false:
                alert("Digite um email válido!");
                break

        }
    }


}

function validar() {
    var email = document.getElementById('e-mail').value;

    var comp = /\S+@\S+\.\S/;

    var email = document.getElementById('email');

    email.addEventListener('focus', () => {
        email.style.borderColor = "palevioletred";
    });
    email.addEventListener('blur', () => {
        email.style.borderColor = "#ccc";
    });

    var senha = document.getElementById('senha');

    senha.addEventListener('focus', () => {
        senha.style.borderColor = "palevioletred";
    });
    senha.addEventListener('blur', () => {
        senha.style.borderColor = "#ccc";
    });
}
