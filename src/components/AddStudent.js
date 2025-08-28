import React, { useState } from "react";
import StudentService from "../services/StudentService";

function AddStudent({ refresh }) {
  const [student, setStudent] = useState({ name: "", email: "", course: "" });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    StudentService.addStudent(student).then(() => {
      refresh(); // ✅ refresh passed from parent
      setStudent({ name: "", email: "", course: "" });
    });
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="course"
          value={student.course}
          onChange={handleChange}
          placeholder="Course"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddStudent;
