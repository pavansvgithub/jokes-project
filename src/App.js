import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Homepage from "./Homepage";

function App() {
  return (
    <>
      <div className="text-center" style={{ border: "2px solid black" }}>
        <p>Username: pavan123</p>
        <p>Password: pavan#456</p>
      </div>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/homepage" element={<Homepage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
