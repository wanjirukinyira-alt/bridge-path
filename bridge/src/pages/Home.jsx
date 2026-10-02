import { Link } from 'react-router-dom';
import heroImage from '../assets/_ (25).jpeg';

const stats = [
  { label: 'Students', value: '10+' },
  { label: 'Courses', value: '6' },
  { label: 'Support', value: '24/7' },
];

const features = [
  {
    title: 'Student Directory',
    description: 'Browse each learner quickly and keep all profiles in one place.',
  },
  {
    title: 'Fast Records Access',
    description: 'Find academic notes, contact details, and course information in seconds.',
  },
  {
    title: 'Easy Administration',
    description: 'Manage student entries and updates without the clutter of complex tools.',
  },
];

function Home() {
  return (
    <div className="home-page home-page--fullbleed">
      <section className="hero-banner">
        <div className="hero-content-wrap">
          <div className="hero-text">
            <span className="badge mb-3 badge--green">Student Records Dashboard</span>
            <h1 className="display-5 fw-bold mb-3">
              Welcome <br /> to<span className="hero-highlight">BrightPath</span> College
            </h1>
            <p className="lead mb-4">
              Manage student details, review academic records, and keep every profile easy to access from one secure place.
              From admissions to progress tracking, BrightPath helps your college stay organized and student-focused.
            </p>

            <div className="d-flex flex-wrap gap-3 hero-actions">
              <Link to="/students" className="btn btn-primary btn-lg hero-button hero-button--primary">
                View Students
              </Link>
              <Link to="/add-student" className="btn btn-outline-light btn-lg hero-button hero-button--secondary">
                Add a Student
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <img src={heroImage} alt="BrightPath students and college campus" />
          </div>
        </div>
      </section>

      <section className="stats-grid mt-4">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="feature-section mt-5">
        <div className="section-heading text-center mb-4">
          <span>Why it matters</span>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
