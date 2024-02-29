import React from 'react'
import Contactus from '../Contact/Contactus'

function Neurology() {
  return (
    <>
   
    
      <div className='container pt-3 pb-5'>
        <div className='row'>
          <div className='col-6'>
            <img src='https://ucarecdn.com/299700f8-25e4-4b76-b4c0-20b9a65684a9/neurology.jpg' className='rounded' height='auto' width='100%'></img>
          </div>
          <div className='col-6'>
            <div className='pt-3 cc'>
              <h2 className='text-danger'>Neurology</h2>
              <h6 className='pt-2 text-secondary fs-5'>Neurology is the branch of medicine concerned with the diagnosis and treatment of diseases and conditions that affect the nervous system. Neurology includes the study of the brain, spinal cord, nerves, and muscles and the way they interact with other bodily processes.</h6>
              <h6 className=' text-secondary fs-5'>Neurology covers a vast range of disorders and conditions, including dementia, Parkinson's disease, epilepsy, multiple sclerosis, muscular dystrophy, and many others. Neurologists work to diagnose and treat these conditions with a combination of therapies and treatments, including medication, surgery, and physical or occupational therapy.</h6>
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
    <li><h5 className='text-secondary pt-4'>Neurological disorders and conditions cover a wide range of effects, from physical symptoms to mental and psychological effects.</h5></li>
    <li><h5 className='text-secondary pt-2'>Neurologists are experts in the brain and nervous system and are specialized in diagnosing and treating neurological disorders and conditions.</h5></li>
    <li><h5 className='text-secondary pt-2'>Treatment for neurological conditions is focused on managing symptoms, preventing and minimizing long-term effects, and improving quality of life.</h5></li>
    <li><h5 className='text-secondary pt-2'>Neural pathways and their functionality affect every aspect of our lives, from our thoughts to our behaviors and ability to interact with the world.</h5></li>
    <li><h5 className='text-secondary pt-2'>nswer any questions or concerns of patients regarding their condition and treatments.</h5></li>
    <li><h5 className='text-secondary pt-2'>Review the effectiveness of current treatments and develop alternatives to improve care.</h5></li>
    </ol></div>
    <div className='col-6'><img src='https://ucarecdn.com/11bcde41-24f2-4833-b174-6fe5d79445d1/NeurologyNeurophysiology.webp' className='rounded' height='auto' width='100%'></img></div>
      </div>
    </div>
    <Contactus />
      </>
  )
}

export default Neurology