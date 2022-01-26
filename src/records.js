import "./App.css";
import React from "react";


 const MedicalRecord = () => {
  return (
    <>
      <div id="record-form-wrapper">
        <form id="record-form">
          <h2>Enter medical record</h2>
          <label htmlFor="patient-id">Patient ID</label>
          <input type="text" name="patient-id"></input>
          <label htmlFor="doctor-id">Doctor ID</label>
          <input type="text" name="doctor-id"></input>
          <label htmlFor="diagnosis">Diagnosis</label>
          <input type="text" name="diagnosis"></input>
          <label htmlFor="treatment">Treatment method</label>
          <input type="text" name="treatment-method"></input>
          <label htmlFor="prognosis">Prognosis</label>
          <input type="text" name="prognosis"></input>
          <label htmlFor="prescriptions">Prescriptions</label>
          <input type="text" name="prescriptions"></input>
          <button id="record-btn" type="submit">
            Submit Entry
          </button>
        </form>
      </div>
    </>
  );
};

export default MedicalRecord;
