

async function buscaPalavras(lingua) {
    const url = `http://localhost:3000/palavras/${lingua}`
    let apiResponse = await fetch(url).then(response => response.json());
    console.log(apiResponse);
    let caixa = document.getElementById('caixa');

    for (let i = 0; i < apiResponse.length; i++) {
        
        var div = document.createElement('div');
        caixa.append(div);
        div.setAttribute('class','busca')

        div.innerHTML = `<h1 id="teste" class = "linguagem">Lingua ${apiResponse[i].lingua}</h1> <p>Palavra nativa: ${apiResponse[i].palavra_nativa}</p> <p>Palavra em português: ${apiResponse[i].palavra_portugues}</p>`

        
    }

    
    
}