import LazyNewsCard from "./LazyNewsCard";

export default function Currently({data}) {    
    if (data) {
        return (
            <>
            <div className="section">
            <h1 className="titles">Section</h1>
                {data.map((item,index) => (
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