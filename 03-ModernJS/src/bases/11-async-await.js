const getImage = async() => { //Convertir una función normal en una promesa más fácil de leer


    try {
        const apiKey = 'Place the API key here';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await respuesta.json();

        const img = document.createElement('img');
        img.src = data.images.original.url;

        const show = document.body.append(img);
    } catch (error) {
        console.log(error);
    }
    
}

getImage();


