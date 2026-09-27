// ============================================
// Image Data Array
// Add new objects here to display more images
// ============================================
const images = [
  {
    id: 1,
    url: "assets/mountain sunrise.jpg",
    title: "Mountain Sunrise",
    description: "A breathtaking view of mountains at dawn",
  },
  {
    id: 2,
    url: "assets/ocean waves.jpg",
    title: "Ocean Waves",
    description: "Crystal clear waters meeting the shore",
  },
  {
    id: 3,
    url: "assets/forest path.jpg",
    title: "Forest Path",
    description: "A peaceful trail through ancient woods",
  },
  {
    id: 4,
    url: "assets/desert dunes golden hour.jpg",
    title: "Desert Dunes",
    description: "Golden sands stretching to the horizon",
  },
  {
    id: 5,
    url: "assets/city night.jpg",
    title: "City Lights",
    description: "Urban landscape glowing at night",
  },
  {
    id: 6,
    url: "assets/northern lights night sky.jpg",
    title: "Northern Lights",
    description: "Aurora dancing across the sky",
  },
];

// ============================================
// ImageCard Component
// Reusable card that displays a single image
// ============================================
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

// ============================================
// App Component (Parent)
// Contains header, gallery grid, and footer
// ============================================
function App() {
  return (
    <>
      {/* Header Section */}
      <header className="header">
        <h1 className="header-title">World View</h1>
        <p className="header-subtitle">Explore beautiful places around the globe</p>
      </header>

      {/* Main Gallery Section */}
      <main className="main">
        <div className="gallery">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2026 World View Gallery. Built with React.</p>
      </footer>
    </>
  );
}

// ============================================
// Render the App to the DOM
// ============================================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
