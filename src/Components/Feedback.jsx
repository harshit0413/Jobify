import React from 'react';
import './Css/Feedback.css';

function Feedback() {
    return (
        <div className='mt-5 feedback'>
            <h1 className='text-center feedbackHeading'>Founders</h1>
            <p className='text-center' style={{ fontWeight: '600', fontSize: '18px' }}>What Our Founders Think</p>
            <div className='py-3 feedbackDiv mx-auto d-flex flex-column align-items-center justify-content-center'>
                <p className='happy' style={{ fontSize: '24px', marginBottom: '10px' }}>Team Rojgar</p>
                <img style={{ width: '400px', borderRadius: '50%', marginBottom: '20px' }} src={require('../assets/CEO.png')} alt='CEO' />
                <div className='feedbackText'>
                    <p className='mb-4' style={{ maxWidth: '400px', textAlign: 'justify', lineHeight: '1.5' }}>
                        Welcome to ROJGAR - your gateway to a world of opportunities. We're dedicated to helping you find the perfect job that aligns with your skills and aspirations. With our user-friendly interface, an extensive job database, and valuable career resources, we're here to support your career journey. Feel safe and supported with our strong commitment to privacy and a helpful community. Join us at ROJGAR, and let's make your career dreams a reality. Welcome to a world of endless possibilities.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
