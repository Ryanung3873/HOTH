import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home.js";
import SignIn from "./pages/SignIn.js";
import SignUpPage from "./pages/SignUp.js";
import Landing from "./pages/Landing.js";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Landing" element={<Landing />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
