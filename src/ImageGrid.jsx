export default function ImageGrid() {
  const imageModules = import.meta.glob("./assets/*.{png,jpg,jpeg,webp}", { eager: true });
  const images = Object.values(imageModules).map((mod) => mod.default);
  return (
    <div className="image-grid">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Photo ${i + 1}`}
          style={{ width: "100%", marginBottom: "10px", display: "block" }}
        />
      ))}
    </div>
  );
}