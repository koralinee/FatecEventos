function validarCampos() {
    
    let registro = document.getElementById('ra')
    let senha = document.getElementById('senha')
    let confirmarSenha = document.getElementById('confirmasenha')
    
    if (isNaN(registro.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Registro inválido',
            text: 'O campo registro deve possuir apenas números.'
        })
        registro.focus()
        return false
    }
    if ((registro.value.length != 13) && (registro.value.length != 5)) {
        Swal.fire({
            icon: 'error',
            title: 'Registro inválido',
            text: 'O campo registro deve possuir o tamanho equivalente ao cadastro do aluno ou do funcionário.'
        })
        registro.focus()
        return false
    }
    if (confirmarSenha.value != senha.value) {
        Swal.fire({
            icon: 'error',
            title: 'Senha inválida',
            text: 'As senhas são diferentes.'
        })
        confirmarSenha.focus()
        return false
    }

    let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,16}$/
    if (!regex.exec(senha.value)){
        Swal.fire({
            icon: 'error',
            title: 'Senha inválida',
            text: 'A senha deve conter entre 6 a 16 caracteres sendo pelo menos 1 letra maiúsula e 1 minúscula, 1 numero e 1 caractere especial.'
        })
        senha.focus()
        return false
    }

    let timerInterval
    Swal.fire({
        color: '#04631d',
        title: 'Cadastro realizado com sucesso!',
        timer: 2000,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
    }
    })
}