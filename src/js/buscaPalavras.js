

async function buscaPalavras(lingua) {
    const url = `http://localhost:3000/palavras/${lingua}`
    let apiResponse = await fetch(url).then(response => response.json());
    console.log(apiResponse);
    let caixa = document.getElementById('caixa');

    for (let i = 0; i < apiResponse.length; i++) {
        
        var div = document.createElement('div');
        caixa.append(div);
        div.setAttribute('class','palavra')

        div.innerHTML = `<h1 id="teste">${apiResponse[i].lingua}</h1>`

        // for (let j = 0; j < apiResponse.length; j++) {

        //     var paragrafo = document.createElement('p');

        //     div.appendChild(paragrafo);

        //     paragrafo.innerHTML = apiResponse[i].lingua
            
        // }
        
        
    }

    
    
}