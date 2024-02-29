import React from "react";
import Contactus from "../Contact/Contactus";
import "./Excel.css";

function Endoscopy() {
  return (
    <>
      <h1 className="text-center pt-5 exhd pb-5">ENDOSCOPY</h1>
      <div className="container pt-5">
        <div className="row">
          <div className="col-7">
            <h5 className="text-secondary ">
              Endoscopy is a nonsurgical procedure that can be used to examine
              your digestive tract. Using an endoscope, a flexible tube with a
              light and camera attached to it, your doctor can view pictures of
              your digestive tract on a color TV monitor.
            </h5>
            <h5 className="text-secondary pt-4 ">
              During an upper endoscopy, an endoscope is passed through your
              mouth and throat and into your esophagus, allowing the doctor to
              view the esophagus, stomach, and upper part of the small
              intestine.
            </h5>
            <h5 className="text-secondary pt-4">
              Similarly, endoscopes can be passed into your large intestine
              (colon) through the rectum to examine this area of the intestine.
              This procedure is called sigmoidoscopy or colonoscopy depending on
              how far up the colon is examined.
            </h5>
            <h5 className="text-secondary pt-4">
              A special form of endoscopy called endoscopic retrograde
              cholangiopancreaticography, or ERCP, allows pictures of the
              pancreas, gallbladder, and related structures. ERCP is also used
              for stent placement and biopsies. Endoscopic ultrasound or EUS
              combines upper endoscopy and ultrasound examination to obtain
              images and information about various parts of the digestive tract.
            </h5>
          </div>

          <div className="col-4">
            <img
              src="https://ucarecdn.com/d7bd9ad3-eea7-436b-8c39-338364debf9c/TNE.jpg"
              height="auto"
              width="100%"
            />
          </div>
        </div>
      </div>

      <Contactus />
    </>
  );
}

export default Endoscopy;
