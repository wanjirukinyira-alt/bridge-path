import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  age: '',
  gender: 'Female',
  course: '',
};

function AddStudent() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4 p-lg-5">
              <h1 className="mb-3">Register Student</h1>
              <div className="alert alert-info" role="alert">
                This is a prototype form only. The data is not currently saved to the server.
              </div>

              {submitted && (
                <div className="alert alert-success" role="alert">
                  Prototype form submitted successfully. Saving will be added in a future phase.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Full name</label>
                    <input
                      id="name"
                      className="form-control"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter student name"
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                      id="email"
                      className="form-control"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="student@brightpath.edu"
                    />
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input
                      id="age"
                      className="form-control"
                      type="number"
                      name="age"
                      min="10"
                      max="80"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="18"
                    />
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <select
                      id="gender"
                      className="form-select"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="course" className="form-label">Course</label>
                    <input
                      id="course"
                      className="form-control"
                      type="text"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      placeholder="Software Development"
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-end mt-4">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
