import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="mt-5 pt-5 pb-2 footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xs-12 about-company">
              <h2 className="fs-2">AR Hospitals</h2>
              <p className="pr-5 text-white-50 fs-6">
                Care when you need it most. Our hospital offers unmatched 24x7
                attention, unmatched facilities, and unmatched expertise to
                provide you with care and comfort at your highest time of need.
                Let us be your safe harbor in the middle of the storm, offering
                you the compassionate and comprehensive care you need to get
                back to your healthiest, happiest self.{" "}
              </p>
              <p>
                <a href="#">
                  <i className="fa fa-facebook-square mr-1"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin-square"></i>
                </a>
              </p>
            </div>
            <div className="col-lg-3 col-xs-12 links">
              <h4 className="mt-lg-0 mt-sm-3 fs-4">Links</h4>
              <ul className="m-0 p-0">
                <li>
                  - <a href="#">Our Experts</a>
                </li>
                <li>
                  - <a href="#">About Us</a>
                </li>
                <li>
                  - <a href="#">Work With Us</a>
                </li>
                <li>
                  - <a href="#">Careers</a>
                </li>
                <li>
                  - <a href="#">Admin Login</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-xs-12 location ty">
              <h4 className="mt-lg-0 mt-sm-4 fs-4 ">Location</h4>
              <p className="fs-6">
                00/00,opp Asgard,
                <br />
                Batsman Street, Nagrues,
                <br />
                Chennai-04
              </p>
              <p className="mb-0 fs-6">
                Contact
                <br />
                Phone : +91 000-000-0000
                <br />
                Ambulance : +91 000-000-0000
              </p>
              <p className="mb-0 fs-6">
                Mail
                <br />
                help@arhospitals.com
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col copyright">
              <p className="fs-6">
                <small className="text-white-50">
                  © 2024. All Rights Reserved.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
