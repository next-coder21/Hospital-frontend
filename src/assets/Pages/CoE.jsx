import React from "react";
import "./coe.css";
import { Link } from "react-router-dom";

function CoE() {
  return (
    <div className="text-center pt-5 pb-2 tu">
      <p className="">
        CENTERES OF <span className="exce">EXCELLENCE</span>
      </p>
      <div className="container pt-5 pb-3" width="100%">
        <div className="row">
          <div className="col-12 col-lg-4 col-md-6  cetp">
            <Link to="/laproscopy">
              <img
                src="https://ucarecdn.com/69e4e6e5-7e65-4dcd-95cd-ddc808163e35/lapro.jpg"
                height="auto"
                width="100%"
              />
              <h5 className="pt-4">Laproscopy</h5>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4  cetp">
            <Link to="/endoscopy">
              <img
                src="https://ucarecdn.com/c5e479c4-47ea-4667-b970-11be3038d50c/endo.jpg"
                height="auto"
                width="100%"
              />
              <h5 className="pt-4">Endoscopy</h5>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4  cetp">
            <Link to="/openheart">
              <img
                src="https://ucarecdn.com/e7ae4a44-81c4-479f-80bd-e9a7db9e1322/-/preview/-/quality/smart_retina/-/format/auto/"
                height="auto"
                width="100%"
              />
              <h5 className="pt-4">Open Heart </h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoE;
