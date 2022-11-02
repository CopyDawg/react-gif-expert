
export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=PDZqbg4W2T902f6k8N93c5p6JW1egeaP&q=${category}&limit=10`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({
       id: img.id,
       title: img.title,
       url: img.images.downsized_medium.url
    }))
    
    return gifs;

}