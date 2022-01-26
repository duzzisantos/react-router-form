import "./App.css";
import React from "react";
import Login from "./homepage";
import DoctorInfo from "./doctors";
import NewPatient from "./patients";
import MedicalRecord from "./records";
import { Route, Routes } from "react-router-dom";
import NavBar from "./navbar";

const App = () => { //call components as elements not functions, otherwise react renders an empty page
  return (
    <div className="App">
      <NavBar />
      <hr></hr>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="homepage" element={<Login/>} />
          <Route path="doctors" element={<DoctorInfo/>} />
          <Route path="patients" element={<NewPatient/>}/>
          <Route path="records" element={<MedicalRecord/>}/>
        </Routes>
    </div>
  );
};

export default App;
