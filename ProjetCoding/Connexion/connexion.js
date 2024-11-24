// ----- Partie Page de Connexion -----



let form = document.querySelector('form')
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let errorContainer = document.querySelector('.message-error')
    let errorList = document.querySelector('#list-error')
    errorList.innerHTML = ''
    
    
    let pseudo = document.querySelector('#pseudo')
    pseudo.classList = ''
    
    
    if ( pseudo.value.length < 6 )
        {
            errorContainer.classList.add('visible')
            pseudo.classList.add('error')
            
            
            let err = document.createElement('li')
            err.innerText = "Le champ pseudo doit contenir au moins 6 caractères"
            errorList.appendChild(err)
            
        } else {
            pseudo.classList.add('success')
            errorContainer.classList.remove('visible')
        }
        
        let email = document.querySelector('#email')
        email.classList = ''
    
        if ( email.value == '' )
        {
            email.classList.add('error')
    
            errorContainer.classList.add('visible')
    
    
            let err = document.createElement('li')
            err.innerText = "L'email doit être valide"
    
            errorList.appendChild(err)
    
        } else {
            email.classList.add('success')
        }

    let password = document.querySelector('#password')
    password.classList = ''
    let passCheck = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*., ?]).+$");

    if ( password.value.lenght < 10 || passCheck.test(password.value) == false )
    {
        password.classList.add('error')
        errorContainer.classList.add('visible')

        let err = document.createElement('li')
        err.innerText = "Le mot de passe doit faire 10 caractères minimum, contenir minuscule, majuscule, chiffre, caractère spécial"

        errorList.appendChild(err)

    } else {
        password.classList.add('success')
        errorContainer.classList.remove('visible')
    }

    let password2 = document.querySelector('#password2')
    password2.classList = ''

    if ( password2.value != password.value || password2.value == '') 
    {
        password2.classList.add('error')

        errorContainer.classList.add('visible')

        let err = document.createElement('li')
        err.innerText = "Les mots de passe doivent être identiques"

        errorList.appendChild(err)


    } else {
        password2.classList.add('success')
        errorContainer.classList.remove('visible')
    }



    let remember = document.querySelector('#remember')
    
    if ( remember.checked == false )
    {
        console.log('Se souvenir = non !')
    } else {
        console.log('Se souvenir = oui !')
    }

    let successContainer = document.querySelector('.message-success')
    successContainer.classList.remove('visible')

    if (
        pseudo.classList.contains('success') &&
        email.classList.contains('success') &&
        password.classList.contains('success') &&
        password2.classList.contains('success')    
    ) 
    {
        successContainer.classList.add('visible')
    }


})

