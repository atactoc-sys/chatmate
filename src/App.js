// App.js or your route configuration file
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ChatApp from "./components/ChatApp";
import Login from "./components/auth/Login";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/chat/*" element={<ChatApp />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
