import React from "react";
import Contactus from "../Contact/Contactus";
import "./Excel.css";

function Laproscopy() {
  return (
    <>
      <div className=" cy">
        <h1 className="text-center pt-5 exhd pb-5">LAPROSCOPY</h1>
        <div className="container pt-5">
          <div className="row">
            <div className="col-sm-8">
              <h5 className="text-secondary ">
                Laparoscopy is a procedure used to check the organs in the belly
                (abdomen). It can also check a woman's pelvic organs.
                Laparoscopy uses a thin lighted tube that has a video camera.
                The tube is called a laparoscope.
              </h5>
              <h5 className="text-secondary pt-4 ">
                One benefit of laparoscopy is that it is minimally invasive.
                That means it uses a very small cut in the belly. Laparoscopy
                usually takes less time and has a faster recovery than open
                surgery.
              </h5>
              <h5 className="text-secondary pt-4">
                Laparoscopy may be used to take a small tissue sample for
                testing (a biopsy). It can also be used to remove organs such as
                the appendix (appendectomy) or the gallbladder
                (cholecystectomy).
              </h5>
              <h5 className="text-secondary pt-4">
                A laparoscopy may be performed to find the cause of symptoms
                such as pelvic pain or subfertility – this is known as a
                diagnostic laparoscopy. It helps your gynaecologist make a
                diagnosis.
              </h5>
            </div>

            <div className="col-sm-4">
              <img
                src="https://ucarecdn.com/483411cf-0f2d-47a5-9af0-729fc6c090d5/image00110227x300.png"
                height="auto"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
      <Contactus />
    </>
  );
}

export default Laproscopy;
