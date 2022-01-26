import "./App.css";
import React from "react";

 const DoctorInfo = () => {
  return (
    <>
      <div id="doctor-info-form-wrapper">
        <form id="doctor-info-form">
          <h2>Enter new doctor information</h2>
          <label htmlFor="docfirstname">First name</label>
          <input type="text" name="docfirstname"></input>
          <label htmlFor="doclastname">Last name</label>
          <input type="text" name="doclastname"></input>
          <label htmlFor="docemail">Email</label>
          <input type="email" name="docemail"></input>
          <label htmlFor="doctelephone">Telephone</label>
          <input type="tel" name="doctelephone"></input>
          <label htmlFor="specialization">Next of kin</label>
          <input type="tel" name="specialization"></input>
          <button id="doctor-info-btn" type="submit">
            Submit Entry
          </button>
        </form>
      </div>
    </>
  );
};

export default DoctorInfo;