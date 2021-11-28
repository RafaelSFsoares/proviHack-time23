const url = `http://localhost:3000/palavras`;
let form = document.querySelector("form")
form.addEventListener('submit', function(event){
    event.preventDefault()
    event.stopPropagation()})

   

 function cadastroPalavras() {
    const body = {        
        lingua : document.querySelector("#linguaNativa").value,
        palavra_nativa : document.querySelector("#palavraNativa").value,        
        palavra_portugues : document.querySelector("#palavraPortugues").value     
    }
    console.log(body);

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
        });
}





