let recupera =  document.getElementById('recupera')
let titulo =  document.getElementById('titulo-recuperacao')

recupera.addEventListener('click', ()=>{

    let email = document.getElementById('email').value 

    try {
        if(email.indexOf('@')>0){
            titulo.innerText = 'O email de recuperação foi enviado!'
            setTimeout(()=>{
                return location = "./login.html"
            },2500)
        }else{
            throw new Error('Email inválido, tente novamente.')
        }
    } catch (error) {
        titulo.innerText = error
    }


})