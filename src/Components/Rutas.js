import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Sales from './Sales/Sales';
import Rent from './Rent/Rent';
import Contact from './Contact/Contact';

const Rutas = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Rent' element={<Rent />} />
                <Route path='/Sales' element={<Sales />} />
                <Route path='/Contact' element={ <Contact/>} />
            </Routes>
        </Router>
    )
}

export default Rutas;