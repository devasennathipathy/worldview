import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import mountainSunrise from "./assets/mountain sunrise.jpg";
import oceanWaves from "./assets/ocean waves.jpg";
import forestPath from "./assets/forest path.jpg";
import desertDunes from "./assets/desert dunes golden hour.jpg";
import cityNight from "./assets/city night.jpg";
import northernLights from "./assets/northern lights night sky.jpg";

const images = [
  {
    id: 1,
    url: mountainSunrise,
    title: "Mountain Sunrise",
    description: "A breathtaking view of mountains at dawn",
  },
  {
    id: 2,
    url: oceanWaves,
    title: "Ocean Waves",
    description: "Crystal clear waters meeting the shore",
  },
  {
    id: 3,
    url: forestPath,
    title: "Forest Path",
    description: "A peaceful trail through ancient woods",
  },
  {
    id: 4,
    url: desertDunes,
    title: "Desert Dunes",
    description: "Golden sands stretching to the horizon",
  },
  {
    id: 5,
    url: cityNight,
    title: "City Lights",
    description: "Urban landscape glowing at night",
  },
  {
    id: 6,
    url: northernLights,
    title: "Northern Lights",
    description: "Aurora dancing across the sky",
  },
];

function ImageCard({ image }) {
  return (
    <article className="card">
      <div className="card-image">
        <img src={image.url} alt={image.title} loading="lazy" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{image.title}</h3>
        <p className="card-description">{image.description}</p>
      </div>
    </article>
  );
}

function App() {
  return (
    <>
      <header className="header">
        <h1 className="header-title">World View</h1>
        <p className="header-subtitle">Explore beautiful places around the globe</p>
      </header>

      <main className="main">
        <div className="gallery">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2026 World View Gallery. Built with React.</p>
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
