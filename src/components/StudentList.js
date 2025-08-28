// src/components/StudentList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StudentService from "../services/StudentService";

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = () => {
    StudentService.getAllStudents()
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  };

  const deleteStudent = (id) => {
    StudentService.deleteStudent(id)
      .then(() => loadStudents())
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Student List</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Age</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>
              <td>
                <Link to={`/edit/${student.id}`}>Edit</Link> |{" "}
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
