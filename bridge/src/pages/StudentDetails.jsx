import { Link, useParams } from 'react-router-dom';
import StatusMessage from '../components/StatusMessage';
import useFetch from '../hooks/useFetch';
import { API_BASE_URL } from '../config';

function StudentDetails() {
  const { id } = useParams();
  const { data: student, loading, error } = useFetch(`${API_BASE_URL}/students/${id}`);

  if (loading) {
    return <StatusMessage variant="loading" />;
  }

  if (error) {
    return (
      <div className="py-4">
        <div className="card border-0 shadow-sm rounded-4">
          <div className="card-body p-4">
            <h1 className="mb-3">Student Profile</h1>
            <div className="alert alert-danger" role="alert">
              {error === 'Student not found' ? 'Student not found. Please choose a valid student from the list.' : error}
            </div>
            <Link to="/students" className="btn btn-primary">
              Back to Students
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="py-4">
        <div className="card border-0 shadow-sm rounded-4">
          <div className="card-body p-4">
            <h1 className="mb-3">Student Profile</h1>
            <p className="alert alert-warning mb-3">Student not found.</p>
            <Link to="/students" className="btn btn-primary">
              Back to Students
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-4">
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="card-header bg-primary text-white py-3 px-4 d-flex justify-content-between align-items-center flex-wrap gap-2">
          <div>
            <h1 className="h3 mb-0 text-white">{student.name}</h1>
          </div>
          <Link to="/students" className="btn btn-light">
            Back to Students
          </Link>
        </div>

        <div className="card-body p-4 p-lg-5">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="bg-light rounded-4 p-4 h-100">
                <p className="text-secondary mb-1">Email</p>
                <h2 className="h5 fw-bold mb-0">{student.email}</h2>
              </div>
            </div>

            <div className="col-md-6">
              <div className="bg-light rounded-4 p-4 h-100">
                <p className="text-secondary mb-1">Course</p>
                <h2 className="h5 fw-bold mb-0">{student.course}</h2>
              </div>
            </div>

            <div className="col-md-6">
              <div className="bg-light rounded-4 p-4 h-100">
                <p className="text-secondary mb-1">Age</p>
                <h2 className="h5 fw-bold mb-0">{student.age}</h2>
              </div>
            </div>

            <div className="col-md-6">
              <div className="bg-light rounded-4 p-4 h-100">
                <p className="text-secondary mb-1">Gender</p>
                <h2 className="h5 fw-bold mb-0">{student.gender}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;
