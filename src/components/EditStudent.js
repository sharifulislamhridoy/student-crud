// src/components/EditStudent.js
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentService from "../services/StudentService";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({ name: "", email: "", age: "" });

  useEffect(() => {
    StudentService.getStudentById(id)
      .then(res => setStudent(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    StudentService.updateStudent(id, student)
      .then(() => navigate("/"))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={student.name} onChange={handleChange} required /><br />
        <input name="email" value={student.email} onChange={handleChange} required /><br />
        <input name="age" type="number" value={student.age} onChange={handleChange} required /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditStudent;
