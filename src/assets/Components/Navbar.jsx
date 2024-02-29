import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="d-lg-none d-xl-none d-xl-none">
        <ul className="text-center text-danger fs-3 ">
          This page is not optimised for mobile view{" "}
        </ul>
      </nav>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container text-light">
          <Link to="/" className="navbar-brand text-light fs-2 hj">
            AR Hospitals
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link className="nav-link mx-2 text-light" to="/ourexperts">
                  Our Expertise
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 text-light" to="/aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 text-light" to="/careers">
                  Work With Us
                </Link>
              </li>
              <li className="nav-item ms-3">
                <a
                  className="btn btn-black btn-rounded sy"
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#Appoinment"
                >
                  <span>·</span> Book an Appointment
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="modal fade"
        id="Appoinment"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header"></div>
            <div className="nvo">
              <form action="#">
                <h1 className="pt-3 pb-3">Book Your appoinment</h1>

                <input type="text" placeholder="name" name="name" />
                <input type="number" placeholder="mobile number" name="mob" />
                <input
                  name="Symptoms"
                  type="text"
                  placeholder="Tell Your Symptoms"
                />
                <input type="date" name="dateap" />
                <br />
                <button
                  type="button"
                  className="submit"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
