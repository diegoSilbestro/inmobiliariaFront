import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styless/Navbar.css'

const Navbar = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const resizeHandler = () => setScreenWidth(window.innerWidth);


  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    }
  })


   const [visibility, setVisibility] = useState('collapse navbar-collapse');


  const toggleVisibility = () => {
    if (screenWidth <= 768) {
      visibility === 'collapse navbar-collapse' ?  setVisibility('collapse navbar-collapse show') : setVisibility('collapse navbar-collapse');
    }
    else {
      setVisibility('collapse navbar-collapse');
    }
   
  }
  
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary" id='nav'>
      <div className="container-fluid" id='navCont'>
        <NavLink className="navbar-brand" id='navlink' onClick={toggleVisibility} to='/'>SILBESTRO Propiedades</NavLink>
        <button className="navbar-toggler" type="button" onClick={toggleVisibility} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={visibility} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item text-primary">
              <NavLink className="nav-link active" id='navlink' aria-current="page" onClick={toggleVisibility} to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" id='navlink' aria-current="page" onClick={toggleVisibility} to='/Rent'>Alquileres</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" id='navlink' aria-current="page" onClick={toggleVisibility} to='/Sales'>Ventas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" id='navlink' aria-current="page" onClick={toggleVisibility} to='/Contact'>Contacto</NavLink>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
