import React from 'react'
import './Css/Footer.css'
import logo from '../assets/log.png';

function Footer() {
  return (
    <div className='footer mx-auto pb-2 mb-2'>
        <div className='row mx-auto d-flex  pt-5'>
            <div className='col-lg-6 col-md-12 flex-column'>
            <div className='col-12 footer-div1' style={{ textAlign: 'justify' }}>
            <h3 className='main-heading d-flex align-items-center'>ROJGAR <img className='vector ml-2' src={logo} alt={logo} style={{ width: '100px', height: '100px' }} /></h3>
            <div className='footer-text'>
                Rojgar is one of the best job portals that helps in empowering your career journey with seamless connections and limitless opportunities.
            </div>
                    <div className='mt-3'>
    <img className='vectorImg mr-2' src={require('../assets/instagram.png')} alt='Instagram' />
    <img className='vectorImg mr-2' src={require('../assets/fb.png')} alt='Facebook' />
    <img className='vectorImg' src={require('../assets/twitter.png')} alt='Twitter' />
</div>

                </div>
            </div>
            <div className='col-lg-6 col-md-12 d-flex justify-content-center'>
                <div className='col-6 flex-column footer-div2'>
                    <p className='footer-heading mb-5'>Explore</p>
                    <p className='footer-heading mb-5'>Post a Job</p>
                    <p className='footer-heading mb-5'>Services</p>
                </div>
                <div className='col-6 footer-div2'>
                    <p className='footer-heading mb-5'>About</p>
                    <p className='footer-heading mb-5'>Seek a Job</p>
                    <p className='footer-heading mb-5'>Support</p>
                </div>
            </div>
        </div>
        <div className='text-center'>
            <p className='mb-0'>Privacy Policy | Terms & Conditions</p>
        </div>
    </div>
  )
}

export default Footer
