import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Students', to: '/students' },
  { label: 'Add Student', to: '/add-student' },
  { label: 'About', to: '/about' },
];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          BrightPath College
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li key={item.to} className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  end={item.to === '/'}
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
