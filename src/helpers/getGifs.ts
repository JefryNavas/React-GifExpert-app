export interface ImagenGif { id: number; title: string; url: string }

export const getGifs = async (categorySearch: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=kU9MqDD9GwgEjOM8sf26U47n796pKBwf&q=${categorySearch}&limit=${10}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs: ImagenGif[] = data.map((img: { id: number; title: string; images: { downsized_medium: { url: string }; }; }) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}
