// ImageGrid component for displaying a grid of images
// Uses Vite's import.meta.glob to import all images from the assets folder
export default function ImageGrid() {
  // Import all images from ./assets with supported extensions, eager loads them
  const imageModules = import.meta.glob("./assets/*.{png,jpg,jpeg,webp}", { eager: true });
  // Extract the default export (image URL) from each module
  const images = Object.values(imageModules).map((mod) => mod.default);

  return (
    <div
      // CSS columns for masonry-style grid
      style={{
        columns: 4,
        gap: "10px",
        width: "100%",
      }}
    >
      {/* Render each image in the grid */}
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Photo ${i + 1}`}
          style={{
            width: "100%",
            marginBottom: "10px",
            display: "block",
          }}
        />
      ))}
    </div>
  );
}