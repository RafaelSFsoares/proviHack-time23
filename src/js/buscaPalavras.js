

async function buscaPalavras(lingua) {
    const url = `http://localhost:3000/palavras/${lingua}`
    let apiResponse = await fetch(url).then(response => response.json());
    console.log(apiResponse);
    
}