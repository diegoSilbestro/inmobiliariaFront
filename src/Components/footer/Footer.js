import React from 'react';
import ReactWhatsapp from 'react-whatsapp';
import whatsappIcon from '../icons/whatsapp1.svg';
import instagram from '../icons/instagram.svg';
import facebook from '../icons/facebook.svg';
import { NavLink } from 'react-router-dom';
import '../Styless/footer.css';

const Footer = () => {
  return (
    <div className='z-3 pb-3 position-absolute top-100 start-50 translate-middle container-fluid' id='footer'>
      <h4>No dudes en contactarnos!!!</h4>
      <ReactWhatsapp number='2281602022' message='Hola, quisiera consultarte por...' className='btn'>
        <img src={whatsappIcon} alt='Whatsapp' />
      </ReactWhatsapp>
      <NavLink to='https://www.instagram.com/?hl=en' target="_blank"><img src={instagram} alt='Instagram' /></NavLink>
      <NavLink to='https://www.facebook.com' target="_blank"><img src={facebook} alt='Instagram' /></NavLink>

    </div>
  )
}

export default Footer