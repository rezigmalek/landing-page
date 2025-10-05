import React from 'react'
import MK from '../images/MK style dz profil.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='text-white mt-5' style={{ backgroundColor: '#000000' }}>
      <div className='container py-4'>
        <div className='row'>
          <div className='col-md-4 mb-3 mb-md-0 text-center'>
            <img src={MK} width={80} height={80} />
            <h5 className='pt-4'>Contact us</h5>
            <h5 className='my-3'> +213 552 836 252</h5>
            <h5>Hello@althue-academy.com</h5>
          </div>

          <div className='col-md-4 mb-3 mb-md-0 text-center'>
            <h5 className='pb-5 pt-3'>Usefull links</h5>
            <h5 className='my-3'> About Us</h5>
            <h5>Our Courses</h5>
          </div>
          <div className='col-md-4 mb-3 mb-md-0 justify-content-center text-center'>
            <h5 className='pb-5 pt-3'>Get in touch</h5>
            <div className='d-flex gap-4 my-3 justify-content-center'>
              <FaInstagram size={25} />
              <FaFacebookF size={25} />
              <FaLinkedinIn size={25} />
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className='row text-center py-3'>
        <h4>© 2025 Althue Academy. by creatives, for creatives</h4>
      </div>
    </footer>
  )
}

export default Footer
