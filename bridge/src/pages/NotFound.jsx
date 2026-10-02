import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="py-5 text-center">
      <div className="card border-0 shadow-sm rounded-4 mx-auto" style={{ maxWidth: '540px' }}>
        <div className="card-body p-4 p-lg-5">
          <h1 className="display-6 fw-bold mb-3">Page not found</h1>
          <p className="text-secondary mb-4">The page you are looking for does not exist.</p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
