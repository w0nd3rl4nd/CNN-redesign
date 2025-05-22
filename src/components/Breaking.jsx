import LazyNewsCard from "./LazyNewsCard"

export default function Breaking( {data} ) {
    return (
        <>
            {data && <LazyNewsCard
                type = "breaking"
                image = {data.image}
                title = {data.title}
                description = {data.description}
                link = {data.link}
            />}
        </>
    );
}