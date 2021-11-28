const url = `http://localhost:3000/colaborador`;
let form = document.querySelector("form")
form.addEventListener('submit', function(event){
    event.preventDefault()
    event.stopPropagation()})

   

 function cadastroUsuario() {
     let email = document.querySelector("#email").value
     let senha = document.querySelector("#senha").value  
     let confirma = document.querySelector("#confirma").value

    const body = {        
        nome : document.querySelector("#nome").value,
        email : document.querySelector("#email").value,        
        lingua : document.querySelector("#lingua").value,       
        senha : document.querySelector("#senha").value  
    }
    console.log(body);
    try{            
        if((email.indexOf('@') > 0) && (senha > 8) && (senha == confirma)){

            const request = fetch
        (url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body), mode: 'cors', cache: 'default'
        })

        .then(request => {
            console.log(request.json());
        })
        .catch(error => {
            this.errorMessage = error;
            console.error("Está ocorrendo um erro", error)
        })
        $('#formulario').css('display','none')
        $('#concluido').html('Agradecemos pelo registro, nossa equipe entrará em contato em breve!')
        setTimeout(()=>{
            return location = "./login.html"
        },2500)
        }else{
            throw new Error('Ensira os dados corretamente')
        }
    }catch(error){
        $('.titulo-cadastro').html(error)
    }
    
}



// $("#botao").click(function(){
//     $.ajax({
//     type: 'POST',
//     url: 'http://127.0.0.1:3000/colaborador',
//     dataType: "json",
//     data:JSON.stringify({"nome":"rafael","email":"rafael@gmail.com","lingua":"karib","xp":"quarenta"}),  
//     beforeSend: function(x) {
//      if (x && x.overrideMimeType) { 
//       x.overrideMimeType("application/j-son;charset=UTF-8");  
//     }},
//     processdata: false,
//     success: function(data){
//         console.log(data);
//     },
    
// });});

