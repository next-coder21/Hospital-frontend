import React from 'react'
import Contactus from '../Contact/Contactus'

function Criticalcare() {
  return (<>


  <div className='container pt-3 pb-5'>
    <div className='row'>
      <div className='col-6'>
        <img src='https://ucarecdn.com/0ff25fdb-922d-47db-90d0-8e7579cee7e0/ICU.jpg' className='rounded' height='auto' width='100%'></img>
      </div>
      <div className='col-6'>
        <div className='pt-3 cc'>
          <h2 className='text-danger'>Critical Care</h2>
          <h6 className='pt-2 text-secondary fs-5'>Critical Care is a specialized department within a hospital or medical facility that provides round-the-clock care for patients in critical condition. The Critical Care team consists of highly trained specialists, with expertise in various fields such as medicine, nursing, and other related disciplines. The team monitors patients closely and provides specialized treatment and interventions to save their lives and facilitate their recovery. The team also provides emotional support and information to family members of critically ill patients.</h6>
          <h6 className=' text-secondary fs-5'>Critically ill patients require close monitoring and specialized treatment to improve their chances of surviving and making a full recovery. The Critical Care Dept specializes in critical and complex cases, providing state-of-the-art care and the highest quality of treatment for patients in critical condition. The team of medical professionals works closely with patients and guardians, providing holistic care and support.</h6>
        </div>
      </div>
    </div>
  </div>

<div className='text-center pt-3 ij pb-3'>
        <h4 className='text-light'>SERVICES WE OFFER</h4>
</div>
<div className='container'>
  <div className='row pt-5'>
<div className='col-6'><ol>
<h2 className='text-primary'>Benefits</h2>
<li><h5 className='text-secondary pt-4'><strong>Monitor patients:</strong> Nurses and other healthcare professionals are responsible for monitoring patients and checking vital signs and other parameters regularly.</h5></li>
<li><h5 className='text-secondary pt-2'><strong>Administer medications:</strong> Nurses administer the prescribed medications and treatments according to the healthcare plan developed for each patient.</h5></li>
<li><h5 className='text-secondary pt-2'><strong>Deliver basic care:</strong> Nurses provide basic care services such as bathing, feeding, turning, and cleaning patients.</h5></li>
<li><h5 className='text-secondary pt-2'><strong>Patient interaction:</strong> Nurses and other healthcare professionals interact with patients regularly and maintain clear and open communication to help the patient cope with the pain and stress of being in an intensive care unit.</h5></li>
<li><h5 className='text-secondary pt-2'><strong>Infection control:</strong> Thorough infection control measures improve safety and ensure the health of patients and medical equiplments.</h5></li>
<li><h5 className='text-secondary pt-2'><strong>Documentation:</strong> Nurses document patient observations and health status changes accordingly.</h5></li>
</ol></div>
<div className='col-6'><img src='https://ucarecdn.com/56b23984-7e73-4ca1-92fd-a3bff455be68/nurse.jpg' className='rounded' height='auto' width='100%'></img></div>
  </div>
</div>
<Contactus/>
  </>
    
  )
}

export default Criticalcare