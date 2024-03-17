import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/users/Homepage";
import Login from "./pages/admin/Login";
import AdminHome from "./pages/admin/AdminHome";
import Chatbot from "./pages/users/Chatbot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Chat" element={<Chatbot />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<AdminHome/>} />
      </Routes>
    </Router>
  );
}

export default App;
