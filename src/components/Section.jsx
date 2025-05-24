import LazyNewsCard from "./LazyNewsCard";

export default function Section ({header, items}) {
    
    if (items && header) {
        return (
            <>
            <div className="section">
                <h1 className="subtitles">Health </h1>
                <div className="section-content" id="sections-nav">
                    <div id="big-news">
                        <LazyNewsCard
                            type="sectionHeader"
                            image={header.image}
                            title={header.title}
                            description={header.description || header.title}
                        />
                </div>
                <div id="small-news">
                    {items.map((item, index) => (
                        <LazyNewsCard
                            key={index}
                            type="sectionItem"
                            image={item.image}
                            title={item.title}
                        />
                    ))}
                </div>
            </div>
            </div>
            </>
        
        );
    }

}