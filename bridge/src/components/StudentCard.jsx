import { Link } from 'react-router-dom';

function StudentCard({ student }) {
  return (
    <div className="col-md-6 col-xl-4">
      <div className="card h-100 border-0 shadow-sm">
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start gap-3">
            <h5 className="card-title mb-1">{student.name}</h5>
            <span className="badge text-bg-primary rounded-pill">{student.age} yrs</span>
          </div>

          <p className="text-muted mb-2">{student.course}</p>

          <ul className="list-unstyled small text-secondary mb-3">
            <li>
              <strong>Email:</strong> {student.email}
            </li>
            <li>
              <strong>Gender:</strong> {student.gender}
            </li>
          </ul>

          <div className="mt-auto">
            <Link to={`/students/${student.id}`} className="btn btn-outline-primary w-100">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
