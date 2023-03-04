document.getElementsByTagName('button')[0].addEventListener('click', () => {

    let inputEmail = document.getElementById('typeEmailX').value,
        inputPassword = document.getElementById('typePasswordX').value

    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (inputEmail === '') {
        document.getElementById('typeEmailX').focus();
        document.getElementById('typeEmailX').style.border = 'solid';
        document.getElementById('typeEmailX').style.borderColor = 'red';
        setTimeout(() => { document.getElementById('typeEmailX').style.border = 'none'; }, 2000)
        return
    }

    if (inputPassword === '') {
        document.getElementById('typePasswordX').focus();
        document.getElementById('typePasswordX').style.border = 'solid';
        document.getElementById('typePasswordX').style.borderColor = 'red';
        setTimeout(() => { document.getElementById('typePasswordX').style.border = 'none'; }, 2000)
        return
    }

    if (inputEmail.match(regexEmail)) {
        
        window.location.href = '../dashboard';

    } else {
        document.getElementById('typeEmailX').focus();
        document.getElementById('typeEmailX').style.border = 'solid';
        document.getElementById('typeEmailX').style.borderColor = 'red';
        setTimeout(() => { document.getElementById('typeEmailX').style.border = 'none'; }, 2000)
        return
    }

})