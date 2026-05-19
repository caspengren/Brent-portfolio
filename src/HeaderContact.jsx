export default function HeaderContact() {
  const name = `Brent "Mutt" Kynell`;
  const centerText = "Mutt";
  const centerIndex = name.indexOf(centerText);
  const center = centerIndex + (centerText.length - 1) / 2;

  const letters = Array.from(name).map((char, index) => {
    const offset = index - center;
    const rotation = offset * 1.4;
    const maxLift = 16;
    const maxOffset = Math.max(center, name.length - 1 - center);
    const normalized = Math.min(Math.abs(offset) / Math.max(maxOffset, 1), 1);
    const archFactor = 1 - normalized * normalized;
    const translateY = -(archFactor * maxLift);

    return (
      <span
        key={index}
        className="header-contact-letter"
        style={{
          "--letter-rotate": `${rotation}deg`,
          "--letter-ty": `${translateY}px`
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    );
  });

  return (
    <div className="header-contact">
      <h2 className="header-contact-name">{letters}</h2>
      <p className="header-contact-copy">
        For inquiries — call/text
        <br />
        (218) 343-4804
      </p>
    </div>
  );
}
