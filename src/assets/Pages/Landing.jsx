import React from "react";
import "./style.css";
import CoE from "./CoE";
import Contactus from "./Contact/Contactus";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <img
              src="https://ucarecdn.com/650a9720-822e-47e8-bcee-087fa3a13606/1.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img
              src="https://ucarecdn.com/8d8607c2-f968-4101-b7f4-69adf86c249e/Freeeambulance.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img
              src="https://ucarecdn.com/6e9f2360-1e79-4727-a162-c0cf9e67cfdf/3.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="text-center pt-4 ij pb-3">
        <p className="text-light">Our Mission</p>
      </div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-12">
            <h4>Your Medical Assistant</h4>
            <h6 className="text-secondary md-ts-4">
              Care when you need it most. Our hospital offers unmatched 24x7
              attention, unmatched facilities, and unmatched expertise to
              provide you with care and comfort at your highest time of need.
              Let us be your safe harbor in the middle of the storm, offering
              you the compassionate and comprehensive care you need to get back
              to your healthiest, happiest self.
              <br />
              <br />
              Our experienced team of doctors and health professionals is
              dedicated to delivering comprehensive and personalized care to
              every patient. Our state-of-the-art facilities and equipment are
              here to support you in your recovery journey, creating paths to
              healing and well-being. Join us in discovering the power of
              healing, one step at a time.
            </h6>
          </div>
          <div className="col-sm-12 col-lg-6 col-md-12 ">
            <div className="row">
              <div className="col-6 col-md-4 col-lg-4 col-sm-6  flex text-center bx">
                <Link to="/Critical care">
                  <img
                    className="rounded"
                    src="https://ucarecdn.com/8546a815-b189-4761-8b9f-8a61bee081cc/emergency.png"
                    height="100"
                    width="100"
                  />
                  <h6>Critical Care</h6>
                </Link>
              </div>
              <div className="col-6 col-md-4 col-lg-4 col-sm-6 flex text-center bx ">
                <Link to="/diabetology">
                  <img
                    className="rounded"
                    src="https://ucarecdn.com/05d71cb3-5d0a-490d-ab33-d886fa4d1d2c/diabetology.png"
                    height="100"
                    width="100"
                  />
                  <h6>Diabetology</h6>
                </Link>
              </div>
              <div className="col-6 col-md-4 col-lg-4 col-sm-6 flex text-center bx ">
                <Link to="/oncology">
                  <img
                    className="rounded"
                    src="https://ucarecdn.com/f9f97762-71b9-46c4-9746-c524fd8fd84d/oncology.png"
                    height="100"
                    width="100"
                  />
                  <h6>Oncology</h6>
                </Link>
              </div>
              <br />
              <div className="col-6 col-md-4 col-lg-4 col-sm-6 flex text-center bx ">
                <Link to="/neurology">
                  <img
                    className="rounded"
                    src="https://ucarecdn.com/97c0c629-4ea6-48d2-9cdb-2a128b3c9fb0/neurologyneurosurgery.png"
                    height="100"
                    width="100"
                  />
                  <h6>Neurology</h6>
                </Link>
              </div>

              <div className="col-6 col-md-4 col-lg-4 col-sm-6 flex text-center bx ">
                <Link to="/ent">
                  <img
                    className="rounded"
                    src="https://ucarecdn.com/f16afb76-973a-4f91-a063-fba7127b0611/ENT2.webp"
                    height="100"
                    width="100"
                  />
                  <h6>ENT</h6>
                </Link>
              </div>
              <div className="col-6 col-md-4 col-lg-4 col-sm-6 flex text-center bx ">
                <Link to="/Cardiology">
                  <img
                    className="rounded"
                    src="https://ucarecdn.com/c53471a3-4ac3-4407-ac74-3d48524ed169/cardiology.png"
                    height="100"
                    width="100"
                  />
                  <h6>Cardiology</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CoE />
      <div className="text-center pt-4 ij pb-3">
        <p className="text-light">HEALING MADE EASY</p>
      </div>
      <Contactus />
    </>
  );
}

export default Landing;
