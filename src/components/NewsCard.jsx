import React from "react";
import './NewsCard.css'


const styles = {
  breaking: {
    container: { display: 'flex', width: "100%", height: "auto", padding: 20, margin: "auto", backgroundColor: "var(--color-neutro)"},
    image: { width: "90%", objectFit: "cover" },
    title: { fontFamily: "var(--font-ibm)", fontSize: "32px", fontWeight: "bold", margin: "15px 0" },
    description: { fontSize: 15, marginBottom: 15 },
    button: { padding: "10px 20px", fontSize: 16,   background: "linear-gradient(to right, red, var(--color-granate))", color: "white", border: "none", borderRadius: "10px", cursor: "pointer" },
  },
  currently: {
    container: { padding: 15, width:"20vw", margin: "auto", textAlign: "center" },
    image: { width: "100%", height: 180, objectFit: "cover" },
    title: { fontFamily: "var(--font-ibm)", fontSize: 20, fontWeight: "bold", marginTop: 10 },
  },
  sectionHeader: {
     container: { width:"45vw", margin: "auto",  alignItems: "center", gap: "5vw" },
    image: { width: "100%", height: "auto", objectFit: "cover"},
    title: {fontSize: 32, lineHeight: 1.2},
    description: { fontSize: 15, marginTop: -2},
  },
  sectionItem: {
    container: { display: "flex", flexDirection: "row", alignItems: "center", gap: "1vw", width: "40vw", backgroundColor: "white" },
    image: { width: "20vw", height: "auto", objectFit: "cover" },
    title: {justifyContent: "flex-end", height: "100%", width: "20vw", fontSize: 20, fontWeight: "bold", fontFamily: "var(--font-ibm)", margin: 0, color: "#333" },
  },
  
};

export function NewsCard({ type, image, title, description, link, sectionTitle = "Section" }) {
  switch (type) {
    case "breaking":
      return (
     
        <div style={styles.breaking.container} >
          <div>
            <img src={image} alt={title} style={styles.breaking.image} />
          </div>
          <div style={{width: '50%'}}>
            <h2 style={styles.breaking.title}>{title}</h2>
            <p style={styles.breaking.description}>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button style={styles.breaking.button}>Read More</button>
            </a>
          </div>
        </div>
        
      );

    case "currently":
      return (
        <div>
          {/* {sectionTitle && <h1>{sectionTitle ?? "Latest News"}</h1>} */}
          <div style={styles.currently.container}>
            <img src={image} alt={title} style={styles.currently.image} />
            <h3 style={styles.currently.title}>{title}</h3>
          </div>
        </div>
        
      );

    case "sectionHeader":
      return (
        <div style={styles.sectionHeader.container}>
          <img src={image} alt={title} style={styles.sectionHeader.image} />
          <h2 style={styles.sectionHeader.title}>{title}</h2>
          <p style={styles.sectionHeader.description}>{description}</p>
        </div>
      );

    case "sectionItem":
      return (
        <div style={styles.sectionItem.container}>
          <img src={image} alt={title} style={styles.sectionItem.image} />
          <h4 style={styles.sectionItem.title}>{title}</h4>
        </div>
      );

    default:
      return null;
  }
}

export default NewsCard;
