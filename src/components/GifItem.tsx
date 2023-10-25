interface GifItemProps {
    id: number;
    title: string;
    url: string;
}

export const GifItem: React.FC<GifItemProps> = ({ title, url }) => {

    return (
        <>
            <div className="card">
                <img src={url} />
                <p>{title}</p>
            </div>
        </>
    )
}


