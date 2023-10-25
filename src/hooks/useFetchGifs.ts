import { useState, useEffect } from "react";
import { ImagenGif, getGifs } from "../helpers/getGifs";

const useFetchGifs = (category: string) => {

    const [images, setImages] = useState<ImagenGif[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        console.log(newImages)
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }

}

export default useFetchGifs
