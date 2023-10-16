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
            <p className='mb-0' style={{maxWidth: '250px',lineHeight:'2em'}}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
        </div>
    </div>
  )
}

export default Feedback
