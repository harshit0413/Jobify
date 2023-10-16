import React from 'react'
import './Css/Feedback.css'

function Feedback() {
  return (
    <div className='mt-5 feedback'>
        <h1 className='text-center feedbackHeading'>Founders</h1>
        <p className='text-center' style={{fontWeight: '600'}}>What Our Founders think</p>
        <div className='py-3 feedbackDiv mx-auto d-flex flex-column align-items-center justify-content-center'>
            <p className='happy'>Team Rojgar</p>
            <img style={{width: '22em'}} src={require('../assets/CEO.png')} />
            <p className='mb-0' style={{maxWidth: '500px',lineHeight:'1em'}}>
            Welcome to ROJGAR - your gateway to a world of opportunities. We're dedicated to helping you find the perfect job that aligns with your skills and aspirations. With a user-friendly interface, an extensive job database, and valuable career resources, we're here to support your career journey. Feel safe and supported with our strong commitment to privacy and a helpful community. Join us at ROJGAR and let's make your career dreams a reality. Welcome to a world of endless possibilities.
        </div>
    </div>
  )
}

export default Feedback
