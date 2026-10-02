import StudentCard from '../components/StudentCard';
import StatusMessage from '../components/StatusMessage';
import useFetch from '../hooks/useFetch';
import { API_BASE_URL } from '../config';

function Students() {
  const { data: students, loading, error } = useFetch(`${API_BASE_URL}/students`);

  return (
    <div className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div>
          <h1 className="mb-1">Student Directory</h1>
          <p className="text-secondary mb-0">Browse the full student list and open any profile.</p>
        </div>
      </div>

      {loading && <StatusMessage variant="loading" />}

      {!loading && error && <StatusMessage variant="error" message={error} />}

      {!loading && !error && students && students.length === 0 && (
        <div className="alert alert-info">No students are available at the moment.</div>
      )}

      {!loading && !error && students && students.length > 0 && (
        <div className="row g-4">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Students;
