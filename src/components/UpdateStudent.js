import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import StudentService from "../services/StudentService";

function UpdateStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    StudentService.getStudentById(id).then((res) => setStudent(res.data));
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    StudentService.updateStudent(id, student).then(() => navigate("/"));
  };

  if (!student) return <p>Loading...</p>;

  return (
    <div>
      <h2>Update Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="course"
          value={student.course}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
        <button onClick={() => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
}

export default UpdateStudent;
