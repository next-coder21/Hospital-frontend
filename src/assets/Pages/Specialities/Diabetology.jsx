import React from 'react'
import Contactus from '../Contact/Contactus'

function Diabetology() {
  return (<>


  <div className='container pt-3 pb-5'>
    <div className='row'>
      <div className='col-6'>
        <img src='https://ucarecdn.com/93912812-c52c-4490-9cb9-2f789e577b40/Photoofanolderwomanandherdoctor.avif' className='rounded' height='auto' width='100%'></img>
      </div>
      <div className='col-6'>
        <div className='pt-3 cc'>
          <h2 className='text-danger'>Diabetology</h2>
          <h6 className='pt-2 text-secondary fs-5'>Diabetes is a complex chronic condition that involves high levels of glucose (aka. blood sugar) in the blood. It has two main types: Type 1 and Type 2. Type 1 is caused by the body's inability to produce insulin, while Type 2 is caused by insulin resistance. Diabetic can cause long-term health consequences and is managed through lifestyle changes, medication, and insulin injections.</h6>
          <h6 className=' text-secondary fs-5'>Diabetes management is achieved through maintaining a healthy lifestyle and receiving medical advice. Common lifestyle changes include maintaining a healthy weight, exercising regularly, eating a balanced diet, and avoiding smoking and excessive alcohol consumption. Medical advice may include prescription medications and insulin injections for managing blood sugar levels. Additionally, people with diabetes are advised to have regular checkups with their doctors to monitor the progress of their condition.</h6>
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
<h2 className='text-primary'>Our Roles</h2>
<li><h5 className='text-secondary pt-4'>Provide diagnosis of diabetes and evaluation of the patient's health status and disease severity.</h5></li>
<li><h5 className='text-secondary pt-2'>Prescribe medications and dietary recommendations for diabetic patients.</h5></li>
<li><h5 className='text-secondary pt-2'>Provide mental health support to diabetic patients to manage their stress and depression.</h5></li>
<li><h5 className='text-secondary pt-2'>Participate in research studies and clinical trials to support ongoing development in diabetes care.</h5></li>
<li><h5 className='text-secondary pt-2'>nswer any questions or concerns of patients regarding their condition and treatments.</h5></li>
<li><h5 className='text-secondary pt-2'>Review the effectiveness of current treatments and develop alternatives to improve care.</h5></li>
</ol></div>
<div className='col-6'><img src='https://ucarecdn.com/24f6ce1a-572c-430b-b813-920bce4ef8df/diabetessymptomsandtreatment.jpg' className='rounded' height='auto' width='100%'></img></div>
  </div>
</div>
<Contactus/>
  </>
    
  )
}

export default Diabetology