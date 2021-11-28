let login = document.getElementById('login')

login.addEventListener('click', ()=>{

    let titulo = document.getElementById('titulo-login')

    let email = document.getElementById('exampleInputEmail1').value
    let senha = document.getElementById('floatingInput').value

    try{
        if(email.indexOf('@') >0 && senha.length >= 8){
            return location = "./registro-palavras.html"
        }else{
            throw new Error('Login ou Senha incorretos')
        }
    }catch(error){
        titulo.innerText = `${error}`
        
    }
})