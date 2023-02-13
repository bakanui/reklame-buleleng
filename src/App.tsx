import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DetailRegister from "./pages/DetailRegister";
import EditForm from "./pages/EditForm";
import Login from "./pages/Login";
import Pendataan from "./pages/Pendataan";
import RegistrationForm from "./pages/RegistrationForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pendataan" element={<Pendataan />} />
          <Route path="/registrasi" element={<RegistrationForm />} />
          <Route path="/edit/:id" element={<EditForm />} />
          <Route path="/detail/:id" element={<DetailRegister />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
