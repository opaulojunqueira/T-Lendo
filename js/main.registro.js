document.getElementsByTagName('button')[0].addEventListener('click', () => {

    let inputName = document.getElementById('typeNameX').value,
        inputCPF = document.getElementById('typeCPFX').value,
        inputCel = document.getElementById('typeCelX').value,
        inputEmail = document.getElementById('typeEmailX').value,
        inputPassword = document.getElementById('typePasswordX').value


    let regexCPF = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/,
        regexCel = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
        regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (inputName === '') {
        document.getElementById('typeNameX').focus();
        document.getElementById('typeNameX').style.border = 'solid';
        document.getElementById('typeNameX').style.borderColor = 'red';
        setTimeout(() => { document.getElementById('typeNameX').style.border = 'none'; }, 1500)
        return
    }

    if (inputCPF === '') {
        document.getElementById('typeCPFX').focus();
        document.getElementById('typeCPFX').style.border = 'solid';
        document.getElementById('typeCPFX').style.borderColor = 'red';
        setTimeout(() => { document.getElementById('typeCPFX').style.border = 'none'; }, 1500)
        return
    }

    if (inputCel === '') {
        document.getElementById('typeCelX').focus();
        document.getElementById('typeCelX').style.border = 'solid';
        document.getElementById('typeCelX').style.borderColor = 'red';
        setTimeout(() => { document.getElementById('typeCelX').style.border = 'none'; }, 1500)
        return
    }


    if (inputEmail === '') {
        document.getElementById('typeEmailX').focus();
        document.getElementById('typeEmailX').style.border = 'solid';
        document.getElementById('typeEmailX').style.borderColor = 'red';
        setTimeout(() => { document.getElementById('typeEmailX').style.border = 'none'; }, 1500)
        return
    }

    if (inputPassword === '') {
        document.getElementById('typePasswordX').focus();
        document.getElementById('typePasswordX').style.border = 'solid';
        document.getElementById('typePasswordX').style.borderColor = 'red';
        setTimeout(() => { document.getElementById('typePasswordX').style.border = 'none'; }, 1500)
        return
    }

    if (inputCPF.match(regexCPF)) { // Validação CPF

        if (inputCel.match(regexCel)) { // Validação Cel

            if (inputEmail.match(regexEmail)) { // Validação Email

                window.location.href = '../dashboard';

            } else {
                console.log('Email NÃO é válido')
                document.getElementById('typeEmailX').focus();
                document.getElementById('typeEmailX').style.border = 'solid';
                document.getElementById('typeEmailX').style.borderColor = 'red';
                setTimeout(() => { document.getElementById('typeEmailX').style.border = 'none'; }, 1500)
                return
            }
            console.log('Cel É válido')
        } else {
            console.log('Cel NÃO é válido')
            document.getElementById('typeCelX').focus();
            document.getElementById('typeCelX').style.border = 'solid';
            document.getElementById('typeCelX').style.borderColor = 'red';
            setTimeout(() => { document.getElementById('typeCelX').style.border = 'none'; }, 1500)
            return
        }
        console.log('CPF É válido')
    } else {
        console.log('CPF NÃO é válido')
        document.getElementById('typeCPFX').focus();
        document.getElementById('typeCPFX').style.border = 'solid';
        document.getElementById('typeCPFX').style.borderColor = 'red';
        setTimeout(() => { document.getElementById('typeCPFX').style.border = 'none'; }, 1500)
        return
    }
})