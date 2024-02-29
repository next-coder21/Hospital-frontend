import React from "react";
import "./contact.css";

function Contactus() {
  return (
    <>
      <div className="text-center pt-5 pb-2 tu">
        <p className="">
          CONTACT <span className="exce">US</span>
        </p>
      </div>
      <div className=" nb ">
        <div className="container nvo rounded-3 p-5" id="container">
          <div className="row gap-2 gap-md-0">
            <div className="col-12 col-md-6">
              <form action="#">
                <h1></h1>

                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="w-75"
                />
                <br />
                <br />
                <input
                  type="number"
                  placeholder="mobile number"
                  name="mob"
                  className="w-75"
                />
                <br />
                <br />
                <input
                  name="message"
                  type="text"
                  placeholder="Leave a message"
                  className="w-75"
                />
                <br />
                <br />
                <button>Submit</button>
              </form>
            </div>

            <div className="col-12 col-md-6">
              <div className="">
                <div className="">
                  <h6>
                    Contact,
                    <br />
                    Phone : +91 000-000-0000
                    <br />
                    <br />
                    Ambulance : +91 000-000-0000
                  </h6>
                  <hr />
                  <h6>Mail : help@arhospitals.com</h6>
                  <hr />
                  <h6>
                    Address : 00/00,opp Asgard,
                    <br />
                    Batsman Street, Nagrues,
                    <br />
                    Chennai-04
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
