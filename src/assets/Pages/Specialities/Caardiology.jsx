import React from "react";
import Contactus from "../Contact/Contactus";

function Caardiology() {
  return (
    <>
     
        <div className="container pt-3 pb-5">
          <div className="row">
            <div className="col-6">
              <img
                src="https://ucarecdn.com/5d3be1ce-2088-4477-a78b-12a31299376d/-/preview/500x500/-/quality/smart_retina/-/format/auto/"
                className="rounded"
                height="auto"
                width="100%"
              ></img>
            </div>
            <div className="col-6">
              <div className="pt-3 cc">
                <h2 className="text-danger">Cardiology</h2>
                <h6 className="pt-2 text-secondary fs-5">
                  Cardiology is the field of medicine that studies and treats
                  the heart and blood vessels. Nurses and doctors (cardiologists
                  or cardiothoracic surgeons) specialize in caring for patients
                  with heart disease or other conditions that affect the heart
                  and blood vessels. Cardiologists provide a range of services,
                  including diagnosis and treatment of heart problems,
                  performing procedures such as angiography and stenting,
                  providing advice and education on lifestyle changes, and
                  providing management of heart failure.
                </h6>
                <h6 className=" text-secondary fs-5">
                  Cardiomyopathy - Coronary artery disease - Valvular heart
                  disease - Hypertensive heart disease - Congenital heart
                  failure - Arrhythmia
                </h6>
              </div>
            </div>
          </div>
        </div>
      
      <div className="text-center pt-3 ij pb-3">
        <h4 className="text-light">SERVICES WE OFFER</h4>
      </div>
      <div className="container">
        <div className="row pt-5">
          <div className="col-6">
            <ol>
              <h2 className="text-primary">Our Roles</h2>
              <li>
                <h5 className="text-secondary pt-4">
                  Cardiomyopathy is a condition that causes the weakening and
                  enlargement of the heart muscle
                </h5>
              </li>
              <li>
                <h5 className="text-secondary pt-2">
                  Coronary artery disease is a condition that results from
                  narrowing arteries that carry blood to the heart muscle
                </h5>
              </li>
              <li>
                <h5 className="text-secondary pt-2">
                  Valvular heart disease is a condition where valves in the
                  heart become damaged or malfunction
                </h5>
              </li>
              <li>
                <h5 className="text-secondary pt-2">
                  Hypertensive heart disease is a condition that causes the
                  heart muscle to become thicker or weaker
                </h5>
              </li>
              <li>
                <h5 className="text-secondary pt-2">
                Congenital heart failure is a condition that causes the heart to not pump blood properly from birth
                </h5>
              </li>
              <li>
                <h5 className="text-secondary pt-2">
                Arrhythmia is a condition where the heart beats too fast, too slow, or irregularly.
                </h5>
              </li>
            </ol>
          </div>
          <div className="col-6">
            <img
              src="https://ucarecdn.com/4fcf6f7c-7cd6-46ae-853f-fd43a6666ca2/-/preview/500x500/-/quality/smart_retina/-/format/auto/"
              className="rounded"
              height="auto"
              width="100%"
            ></img>
          </div>
        </div>
      </div>
      <Contactus />
    </>
  );
}

export default Caardiology;
