import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import UpdateStudent from "./components/UpdateStudent";

function App() {
  
const [refreshKey, setRefreshKey] = useState(0);

const refresh = () => setRefreshKey(oldKey => oldKey + 1);


  return (
    <div>
      <h2>React CRUD Example</h2>

      {/* Navigation */}
      <nav>
        <Link to="/">Students</Link> |{" "}
        <Link to="/add">Add Student</Link>
      </nav>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/update/:id" element={<UpdateStudent />} />
        <Route path="/edit/:id" element={<UpdateStudent />} />
      </Routes>
    </div>
  );
}

export default App;
