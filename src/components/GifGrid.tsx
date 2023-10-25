import { ImagenGif } from "../helpers/getGifs";
import useFetchGifs from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

interface GifGridProps {
    category: string;
}

export const GifGrid: React.FC<GifGridProps> = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {isLoading && (<h2>Cargando...</h2>)}
            <div className="card-grid">
                {
                    images.map((image: ImagenGif) => (
                        <GifItem
                            key={image.id}
                            {...image} />
                    ))
                }
            </div>

        </>
    )
}
