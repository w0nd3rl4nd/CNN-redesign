import LazyNewsCard from "./LazyNewsCard";

export default function Section ({header, items}) {
    
    if (items && header) {
        return (
            <>
                <div>
                    <h1></h1>
                    <LazyNewsCard
                        type="sectionHeader"
                        image={header.image}
                        description={header.description || header.title}
                    />
                    {items.map((item, index) => (
                        <LazyNewsCard
                            key={index}
                            type="currently"
                            image={item.image}
                            title={item.title}
                        />
                    ))}
                </div>
            </>
        );
    }

}