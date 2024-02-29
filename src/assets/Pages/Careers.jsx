import React from "react";
import "./Career.css";
import { Link } from "react-router-dom";

function Careers() {

  
  return (
    <>
      <h1 className="text-center pt-5 exhd pb-5 ">Careers</h1>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <span href="#/" className="card card-1 crers">
              <h3 className="card-heading">Staff Nurse</h3>
              <h6>Job Description</h6>
              <p className="card-content">
                As an Expert Nurse, you will be responsible for providing direct
                patient care and support. You will work under the supervision of
                a doctor while taking care of patients in a hospital or other
                medical setting.
              </p>
              <div
                className="read-more card-cta"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                know more
              </div>

              <div
                className="modal fade"
                id="exampleModal"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content text-dark">
                    <div className="modal-body">
                      <h3 className="card-heading ">Staff Nurse</h3>
                      <h6 className="pt-4">Job Description</h6>
                      <p className="card-content pt-3 cers">
                        As an Expert Nurse, you will be responsible for
                        providing direct patient care and support. You will work
                        under the supervision of a doctor while taking care of
                        patients in a hospital or other medical setting. Your
                        role will involve activities such as taking blood
                        pressure, observing patient condition and response,
                        providing treatment and medication, helping with patient
                        mobility, and providing emotional support. Your duties
                        will also include maintaining a clean environment and
                        following all safety protocols.
                      </p>
                      <h6>Experience Level</h6>
                      <p>
                        {" "}
                        - 2+ years as nurse
                        <br />- 1+ years as junior
                      </p>
                      <h6 className="">Your Roles</h6>
                      <ul>
                        <li>
                          Patient care and support: As an Expert Nurse, your
                          main responsibility will be providing direct and
                          hands-on patient care and support. This will involve
                          activities such as taking patient vitals, performing
                          various procedures and tests, administering
                          medications, providing physical and emotional support,
                          and helping with patient mobility.
                        </li>
                        <li>
                          Patient communication: You will often communicate
                          directly with patients, explaining their condition and
                          treatment plan and listening to any concerns and
                          questions they may have.
                        </li>
                        <li>
                          Documentation: You will be responsible for documenting
                          all the details and activities related to patient care
                          and treatment for record-keeping and future reference.
                          This may involve filling out charts, writing progress
                          notes, and entering data into documentation systems.
                        </li>
                        <li>
                          Training: You will receive training in all the
                          relevant tasks and procedures that are necessary to
                          fulfill your job. The hospital or setting will provide
                          extensive training and education to make sure you are
                          aware of all the necessary protocols and practices.
                        </li>
                        <li>
                          Equipment and supplies: You will be responsible for
                          maintaining a clean work area, ensuring all equipment
                          and supplies are organized and stocked up.
                        </li>
                        <li>
                          Growth and Development: The hospital or setting will
                          also provide opportunities for professional growth and
                          development, allowing you to increase your skill set
                          and advance your career. You will have the opportunity
                          to participate in various training workshops and
                          programs, and to learn from experienced nurses and
                          doctors.
                        </li>
                      </ul>
                      <h6>Key Skills</h6>
                      <ol>
                        <li>
                          Solid knowledge of medical and nursing protocols and
                          procedures
                        </li>
                        <li>
                          Excellent communication and interpersonal skills
                        </li>
                        <li>
                          Advanced understanding of anatomy and physiology
                        </li>
                        <li>Critical thinking and analytical skills</li>
                        <li>
                          Patient-centric attitude and strong listening skills
                        </li>
                        <li>
                          Ability to learn and adapt quickly to new situations
                          and challenges
                        </li>
                        <li>
                          Time management skills, planning, and organization
                        </li>
                        <li>
                          Skill with technology and using various medical and
                          computer systems
                        </li>
                      </ol>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Link className="sy" to="/application">
                Apply Now
              </Link>
            </span>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <span href="#/" className="card card-1 crers">
              <h3 className="card-heading">Pharmacist</h3>
              <h6>Job Description</h6>
              <p className="card-content">
                As a pharmacist, you will be responsible for providing
                medication advice and education to patients. This includes
                counselling them on the safe use of medications and providing
                information about side effects,
              </p>
              <div
                className="read-more card-cta"
                data-bs-toggle="modal"
                data-bs-target="#Pharmamod"
              >
                know more
              </div>

              <div
                className="modal fade"
                id="Pharmamod"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content text-dark">
                    <div className="modal-body">
                      <h3 className="card-heading ">Pharmacist</h3>
                      <h6 className="pt-4">Job Description</h6>
                      <p className="card-content pt-3 cers">
                        As a pharmacist, you will be responsible for providing
                        medication advice and education to patients. This
                        includes counselling them on the safe use of medications
                        and providing information about side effects, dosage,
                        and any possible interactions. You will also be
                        responsible for ensuring patient safety and for filling
                        prescriptions accurately and in a timely manner. You
                        will work closely with other healthcare professionals to
                        provide comprehensive and quality care. You will also be
                        required to monitor stock and inventory levels and make
                        orders as needed.
                      </p>
                      <h6>Experience Level</h6>
                      <p>
                        {" "}
                        - 1 - 2 years as Pharmacist
                        <br />- Bsc in any medical field
                      </p>
                      <h6 className="">Your Roles</h6>
                      <ul>
                        <li>
                          Providing medication advice and education to patients
                          - the pharmacist is responsible for providing
                          information and education about medications, including
                          side effects, dosaging, and possible interactions.
                        </li>
                        <li>
                          Ensuring patient safety - the pharmacist is
                          responsible for ensuring that prescriptions are filled
                          accurately and safely.
                        </li>
                        <li>
                          Processing prescriptions - the pharmacist is
                          responsible for verifying that the prescriptions are
                          written accurately and filling them in a timely
                          manner.
                        </li>
                        <li>
                          Monitoring stock and inventory - the pharmacist is
                          responsible for keeping track of stock, supplies, and
                          inventory levels and making orders as needed.
                        </li>
                        <li>
                          Providing consultation - the pharmacist is responsible
                          for providing consultation to patients and healthcare
                          professionals on medications and their use.
                        </li>
                      </ul>
                      <h6>Key Skills</h6>
                      <ol>
                        <li>
                          provide patients with advice and education on
                          medication management
                        </li>
                        <li>
                          ensure patient safety and provide counseling on
                          medication
                        </li>
                        <li>
                          check prescriptions for accuracy and dispense
                          medications appropriately
                        </li>
                        <li>maintain records and documentation</li>
                        <li>
                          stay up-to-date with current news and guidelines in
                          the field
                        </li>
                        <li>
                          monitor stock and inventory levels and place orders
                        </li>
                        <li>
                          Cooperate with other healthcare professionals in the
                          provision of care.
                        </li>
                        <li>
                          Skill with technology and using various medical and
                          computer systems
                        </li>
                      </ol>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Link className="sy" to="/application">
                Apply Now
              </Link>
            </span>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <span href="#/" className="card card-1 crers">
              <h3 className="card-heading">Junior Nurse</h3>
              <h6>Job Description</h6>
              <p className="card-content">
                As a junior nurse, you will support senior nurses with various
                tasks and provide basic care and support for patients. You will
                monitor patients' conditions regularly, administer medications
                as per doctor's order,..
              </p>

              <div
                className="read-more card-cta"
                data-bs-toggle="modal"
                data-bs-target="#jrNurse"
              >
                know more
              </div>

              <div
                className="modal fade"
                id="jrNurse"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content text-dark">
                    <div className="modal-body">
                      <h3 className="card-heading ">Junior Nurse</h3>
                      <h6 className="pt-4">Job Description</h6>
                      <p className="card-content pt-3 cers">
                        As a junior nurse, you will support senior nurses with
                        various tasks and provide basic care and support for
                        patients. You will monitor patients' conditions
                        regularly, administer medications as per doctor's order,
                        and follow hygiene protocols to prevent
                        cross-contamination and infection. You will keep track
                        of patients' vitals and report any problems, keep a
                        stock of essential supplies, and assist with basic
                        procedures and patient movement.
                      </p>
                      <h6>Experience Level</h6>
                      <p>
                        {" "}
                        - Fresher's graduates
                        <br />- min 6 months of on place training
                      </p>
                      <h6 className="">Your Roles</h6>
                      <ul>
                        <li>
                          Providing basic care and support to patients -
                          monitoring their condition, assisting with mobility,
                          and providing emotional support.
                        </li>
                        <li>
                          Administering medications and treatments - following
                          doctor's orders and providing medication to patients.
                        </li>
                        <li>
                          Keeping the patient's room and equipment clean -
                          ensuring hygiene protocols are followed and supplies
                          are stocked.
                        </li>
                        <li>
                          Handling basic procedures - such as taking vitals,
                          monitoring patients' temperature, and providing basic
                          care.
                        </li>
                        <li>
                          Providing customer-focused care - delivering
                          compassionate and empathetic service to patients.
                        </li>
                      </ul>
                      <h6>Key Skills</h6>
                      <ol>
                        <li>
                          Excellent Communication and Interpersonal Skills.
                        </li>
                        <li>Adaptability and Willingness to Learn.</li>
                        <li>Critical Thinking and Analytical Skills.</li>
                        <li>Customer-Focused Care.</li>
                        <li>Assisting with Patient Movement.</li>
                      </ol>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Link className="sy" to="/application">
                Apply Now
              </Link>
            </span>
          </div>
        </div>
      </div>
      <h4 className="text-center pt-5">-- No other openings --</h4>
    </>
  );
}

export default Careers;
