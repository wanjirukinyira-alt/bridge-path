function StatusMessage({ variant, message }) {
  if (variant === 'loading') {
    return (
      <div className="alert alert-info" role="status">
        Loading students...
      </div>
    );
  }

  return (
    <div className="alert alert-danger" role="alert">
      {message || 'Something went wrong while fetching the students.'}
    </div>
  );
}

export default StatusMessage;
