const values = [
  {
    title: 'Student-first focus',
    description: 'We design every record and workflow around easier access, smoother communication, and better support for learners.',
  },
  {
    title: 'Clear organization',
    description: 'Academic details, personal records, and administrative notes stay structured in one reliable place.',
  },
  {
    title: 'Efficient operations',
    description: 'Staff can quickly find what they need, reduce delays, and keep daily college administration running smoothly.',
  },
];

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero__content">
          <span className="about-badge">About BrightPath</span>
          <h1>Helping colleges manage student life with confidence.</h1>
          <p>
            BrightPath College is designed to simplify how institutions track, organize, and access essential student information.
            From academic records to daily administration, the platform keeps key details visible, searchable, and easy to manage.
          </p>
        </div>
      </section>

      <section className="about-grid">
        <div className="about-panel">
          <h2>Our mission</h2>
          <p>
            To create a cleaner, more efficient way for colleges to support students while keeping staff focused on meaningful work instead of paperwork.
          </p>
        </div>

        <div className="about-panel">
          <h2>Our vision</h2>
          <p>
            To build a digital environment where every student record is organized, secure, and ready to support learning, engagement, and long-term success.
          </p>
        </div>
      </section>

      <section className="about-values">
        {values.map((value) => (
          <article key={value.title} className="about-value-card">
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default About;
