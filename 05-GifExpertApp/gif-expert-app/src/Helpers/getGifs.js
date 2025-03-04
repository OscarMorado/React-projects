export const getGifs = async(category) => {

    const apiKey = import.meta.env.VITE_API_KEY_TENOR;
    const url = `https://tenor.googleapis.com/v2/search?q=${category}&key=${apiKey}&limit=8&random=true`;
    const resp = await fetch(url);
    // console.log("Response: " + resp);

    const {results} = await resp.json();
    // console.log("Data: " + results);

    const gifs = results.map(img => ({
        id: img.id,
        title: img.tags[0] + ' ' + img.tags[1], // Concatena dos tags como título, ya que Tenor no maneja títulos
        url: img.media_formats.gif?.url //Devuelve un gif, si no, devuelve undefined en vez de un error
    }));

    // console.log(gifs);

    return gifs;
}

/* 
    Se utilizó tenor en vez de Giphy porque tiene mejores gifs.
*/