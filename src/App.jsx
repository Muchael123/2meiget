import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/users/Homepage";
import Login from "./pages/admin/Login";
import AdminHome from "./pages/admin/AdminHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<AdminHome/>} />
      </Routes>
    </Router>
  );
}

export default App;
