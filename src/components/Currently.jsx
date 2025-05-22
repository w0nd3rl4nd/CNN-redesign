import LazyNewsCard from "./LazyNewsCard";

export default function Currently({data}) {
    return (
        <>
            {data.map((item,index) => (
                <LazyNewsCard
                    key={index}
                    type="currently"
                    image={item.image}
                    title={item.title}
                />
            ))}
        </>
    );
}