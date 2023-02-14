function AboutCard({ title, icon, description, projects }) {
  return (
    <div className="light-bg about-card">
      <div className="flex justify-space">
        <h3 className="green">{title}</h3>
        <img src={icon} width={28} height={28} alt={title} />
      </div>
      <p className="white">{description}</p>
      <span className="gray">{projects.toString()} projects</span>
    </div>
  );
}

export default AboutCard;
