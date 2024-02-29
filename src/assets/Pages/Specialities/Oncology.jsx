import React from "react";
import Contactus from "../Contact/Contactus";

function Oncology() {
  return (
    <>
     
        <div className="container pt-3 pb-5">
          <div className="row">
            <div className="col-6">
              <img
                src="https://ucarecdn.com/f0baced3-4fb5-4ff9-8862-e95d00356f6b/Cancerdoctor.webp"
                className="rounded"
                height="auto"
                width="100%"
              ></img>
            </div>
            <div className="col-6">
              <div className="pt-3 cc">
                <h2 className="text-danger">Oncology</h2>
                <h6 className="pt-2 text-secondary fs-5">
                  Oncology is the medical field that studies and treats cancers.
                  It encompasses a wide range of disciplines, including tumor
                  pathology, radiation therapy, medical oncology, surgery,
                  palliative care, and many others. Oncologists diagnose and
                  treat cancers through a combination of therapies and
                  treatments, including surgery, chemotherapy, radiation
                  therapy, and immunotherapy. Oncologists work in hospitals,
                  clinics, and research laboratories to study cancer biology,
                  treatment outcomes, and improve care for cancer patients.
                </h6>
                <h6 className=" text-secondary fs-5"></h6>
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
                  Diagnostic Services: Oncologists use various diagnostic tools
                  and technologies to help diagnose cancers, such as imaging
                  scans, biopsy, and blood and other lab tests.
                </h5>
              </li>
              <li>
                <h5 className="text-secondary pt-2">
                  Treatment and Management: Oncologists develop and provide
                  tailored treatment plans for cancer patients, taking into
                  account the type and stage of the cancer as well as individual
                  needs and conditions.
                </h5>
              </li>
              <li>
                <h5 className="text-secondary pt-2">
                  Prevention and Education: Oncologists also play an important
                  role in helping to prevent and manage the risk factors for
                  cancer development, such as unhealthy lifestyle habits.
                </h5>
              </li>
              <li>
                <h5 className="text-secondary pt-2">
                  Research and Development: Oncologists dedicate their careers
                  to researching and developing new treatments and methodologies
                  for the prevention, diagnosis, and treatment of cancer.
                </h5>
              </li>
              <li>
                <h5 className="text-secondary pt-2">
                  Mental Health Support: Oncologists also play an important role
                  in providing mental health support to patients and their
                  families, helping them cope with the emotional and mental
                  aspects of having and battling cancer.
                </h5>
              </li>
            </ol>
          </div>
          <div className="col-6">
            <img
              src="https://ucarecdn.com/e6a130cb-a3ae-4de8-a0fa-d54e1fdbf486/dialysisdoctor.jpg"
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

export default Oncology;
