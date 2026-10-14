import { useEffect } from "react";

export default function ImageGrid() {
  const imageModules = import.meta.glob("./assets/*.{png,jpg,jpeg,webp}", { eager: true });
  const images = Object.values(imageModules).map((mod) => mod.default);

  useEffect(() => {
    const imgs = document.querySelectorAll(".image-grid .scroll-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    imgs.forEach((img) => observer.observe(img));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="image-grid">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Photo ${i + 1}`}
          className="scroll-item"
          loading="lazy"
          style={{ width: "100%", marginBottom: "10px", display: "block" }}
        />
      ))}
    </div>
  );
}