import React from "react";
import "./application.css";

function Application() {
  return (
    <>
      <div className="pt-5">
        <div id="survey-container">
          <h1 id="title">Job form</h1>
          <p id="description">Fill in to apply</p>
          <form id="survey-form">
            <label id="name-label" className="row-label" for="name">
              Name:
            </label>
            <input
              id="name"
              className="row-input"
              type="text"
              placeholder="Enter your name"
              required
            />

            <label id="email-label" className="row-label" for="email">
              Email:
            </label>
            <input
              id="email"
              className="row-input"
              type="email"
              placeholder="Enter your email"
              required
            />

            <label className="row-label" for="dropdown">
              Applied for:
            </label>
            <select id="dropdown" className="row-input w-screen" required>
              <option disabled selected>
                Select an option
              </option>
              <option value="primary">Staff Nurse</option>
              <option value="secondary">Junior Nurse</option>
              <option value="higher">Pharmacist</option>
            </select>

            <div className="d-flex pt-2">
              <label id="number-label" className="row-label" for="number" >
                Upload Reume:
              </label>
              <input id="number" className="row-input" type="file" required/>
            </div>

            <p className="row-label">Gender :</p>

            <label className="row-input small" for="male">
              <input type="radio" id="male" name="radio" value="male" />
              <span className="inline-label">Male</span>
            </label>

            <label className="row-input small" for="female">
              <input type="radio" id="female" name="radio" value="female" />
              <span className="inline-label">Female</span>
            </label>

            <label className="row-input small" for="others">
              <input type="radio" id="others" name="radio" value="others" />
              <span className="inline-label">Others</span>
            </label>

            <label className="row-label" for="comments">
              Additional informations:
            </label>
            <textarea
              id="comments"
              placeholder="Enter other informations here..."
            ></textarea>

<div className="tacbox">
  <input id="checkbox" type="checkbox" />
  <label for="checkbox"> I agree to these <a href="#">Terms and Conditions</a>.</label>
</div>

            <button id="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Application;
