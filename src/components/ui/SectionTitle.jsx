function SectionTitle({ title, subtitle, level = "h2" }) {
  const Heading = level;
  
  return (
    <header className="section-title">
      <Heading className="section-title__heading">{title}</Heading>

      {subtitle && (
        <p className="section-title__subtitle">{subtitle}</p>
      )}
    </header>
  );
}

export default SectionTitle;