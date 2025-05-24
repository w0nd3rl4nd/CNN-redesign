import LazyNewsCard from "./LazyNewsCard"
import './NewsCard.css'


export default function Breaking( {data} ) {
    return (
        <> 
            {data && (
            
            <div className="section" id="breaking-container">
            <h1 className="titles">Breaking News</h1>

                <div className="section-content" >
                    <LazyNewsCard
                        type="breaking"
                        image={data.image}
                        title={data.title}
                        description={data.description}
                        link={data.link}
                    />
                </div>
        </div>
        )}
        </>
    );
}