import "./App.css";
import React from "react";

const NewPatient = () => {
  return (
    <>
      <div id="newpatient-form-wrapper">
        <form id="new-patient-form">
          <h2>Enter new patient information</h2>
          <label htmlFor="patient-id">Patient ID</label>
          <input type="text" name="patient-id"></input>
          <label htmlFor="firstname">First name</label>
          <input type="text" name="firstname"></input>
          <label htmlFor="lastname">Last name</label>
          <input type="text" name="lastname"></input>
          <label htmlFor="postaladdress">Postal address</label>
          <input type="text" name="postaladdress"></input>
          <label htmlFor="email">Email</label>
          <input type="email" name="email"></input>
          <label htmlFor="telephone">Telephone</label>
          <input type="tel" name="telephone"></input>
          <label htmlFor="nextofkin">Next of kin</label>
          <input type="text" name="nextOfkin"></input>
          <label htmlFor="nextofkintel">Next of kin's telephone</label>
          <input type="tel" name="nextOfkinTel"></input>
          <label htmlFor="bloodgroup">Blood group</label>
          <input type="text" name="bloodgroup"></input>
          <button id="newpatient-btn" type="submit">
            Submit Entry
          </button>
        </form>
      </div>
    </>
  );
};


export default NewPatient;