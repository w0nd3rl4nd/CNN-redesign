import React from "react";

const styles = {
  breaking: {
    container: { border: "2px solid red", padding: 20, maxWidth: 600, margin: "auto" },
    image: { width: "100%", height: 300, objectFit: "cover" },
    title: { fontSize: 28, fontWeight: "bold", margin: "15px 0" },
    description: { fontSize: 18, marginBottom: 15 },
    button: { padding: "10px 20px", fontSize: 16, backgroundColor: "red", color: "white", border: "none", cursor: "pointer" },
  },
  currently: {
    container: { border: "1.5px solid blue", padding: 15, maxWidth: 400, margin: "auto", textAlign: "center" },
    image: { width: "100%", height: 180, objectFit: "cover" },
    title: { fontSize: 20, fontWeight: "600", marginTop: 10 },
  },
  sectionHeader: {
    container: { borderBottom: "1px solid gray", padding: 15, maxWidth: 350, margin: "auto", display: "flex", alignItems: "center", gap: 15 },
    image: { width: 80, height: 80, objectFit: "cover", borderRadius: 8 },
    description: { fontSize: 16 },
  },
  sectionItem: {
    container: { display: "flex", alignItems: "center", gap: 10, padding: 10, maxWidth: 300, margin: "auto" },
    image: { width: 50, height: 50, objectFit: "cover", borderRadius: 4 },
    title: { fontSize: 16, fontWeight: "500" },
  },
};

export function NewsCard({ type, image, title, description, link }) {
  switch (type) {
    case "breaking":
      return (
        <div style={styles.breaking.container}>
          <img src={image} alt={title} style={styles.breaking.image} />
          <h2 style={styles.breaking.title}>{title}</h2>
          <p style={styles.breaking.description}>{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button style={styles.breaking.button}>Read More</button>
          </a>
        </div>
      );

    case "currently":
      return (
        <div style={styles.currently.container}>
          <img src={image} alt={title} style={styles.currently.image} />
          <h3 style={styles.currently.title}>{title}</h3>
        </div>
      );

    case "sectionHeader":
      return (
        <div style={styles.sectionHeader.container}>
          <img src={image} alt={title} style={styles.sectionHeader.image} />
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
