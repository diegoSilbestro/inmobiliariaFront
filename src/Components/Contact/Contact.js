import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { NavLink } from 'react-router-dom';
import ReactWhatsapp from 'react-whatsapp';
import whatsappIcon from '../icons/whatsapp1.svg'
import instagram from '../icons/instagram.svg';
import facebook from '../icons/facebook.svg';
import '../Styless/contact.css'

const Contact = () => {
  const [validated, setValidated] = useState("row g-3 needs-validation");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated('row g-3 was-validated')
    } else {
      sendEmail(event);
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    await emailjs.sendForm('service_d06ui27', 'template_cp2d4nc', e.target, 'e4QimKAfiMd1IXCKJ')
      .then((result) => {
        console.log(result.text);
        alert('Se envio correctamente')
      }, (error) => {
        alert('No se pudo enviar')
      });
  }


  return (

    <div className='p-3 mt-3 border-0 bd-example bd-example-zindex-levels position-relative   d-flex justify-content-center' id='container'>
      <div className='z-3 position-absolute container-fluid ' id='container2'>
        <h1 className='title'>SILBESTRO propiedades</h1>
        <h2>Contacto</h2>
        <div className='m-4'>
          <form className={validated} noValidate onSubmit={handleSubmit}>
            <div className="container text-center" id='fromContainer'>
              <div className="row justify-content-md-center">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name='name' id="name" placeholder="Juan Perez" required />
                    <div className="valid-feedback">Bien!</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name='email' id="email" placeholder="nombre@ejemplo.com" required />
                    <div className="valid-feedback">Bien!</div>
                    <div className="invalid-feedback">Ingrese un email válido</div>
                  </div>
                  <div className="sm-3">
                    <label htmlFor="phone" className="form-label">Telefono</label>
                    <input type="number" className="form-control" name='phone' id="phone" placeholder="2281502030" required />
                    <div className="valid-feedback">Bien!</div>
                    <div className="invalid-feedback">Ingrese un nro de telefono válido</div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Consulta</label>
                    <textarea className="form-control" name='message' id="exampleFormControlTextarea1" rows="3" required></textarea>
                    <div className="valid-feedback">Bien!</div>
                    <div className="invalid-feedback">Ingrese su consulta</div>
                  </div>
                  <div className="mb-3 mt-5">
                    <button className="btn" type="submit" id='btn'>Submit form</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className='d-flex justify-content-center'>
          <h2 className='m-4'>También podes escribirnos por Whatsapp</h2>
          <ReactWhatsapp number='2281602022' message='Hola, quisiera consultarte por...' className='btn'>
            <button id='whatsappIcon' ><img src={whatsappIcon} alt='Whatsapp' /></button>
          </ReactWhatsapp>
        </div>
        <div className='d-flex justify-content-center'>
          <h2 className='m-3'>O mirar nuestras redes</h2>
          <NavLink className='me-3' to='https://www.instagram.com/?hl=en' target="_blank"><img src={instagram} alt='Instagram' /></NavLink>
          <NavLink className='me-3' to='https://www.facebook.com' target="_blank"><img src={facebook} alt='Instagram' /></NavLink>
        </div>
      </div>
      <div className='z-2 pb-3 position-absolute container-fluid' >
        <img src="https://sobreplanos.s3.amazonaws.com/uploads/real_estate_attachment/picture/9305583/lago_mayor_82_departamentos_en_venta_en_los_manzanos_de_2_3_hab_gallery_269605a30d05761cb7ee.jpg" className="img-fluid position-fixed translate-middle-x" id='img' alt="Silbestro Porpiedades"></img>
      </div>
    </div>


  )
}

export default Contact;