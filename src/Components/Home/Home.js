import React from 'react';
import Footer from '../footer/Footer'
import '../Styless/homeStyless.css'

const Home = () => {
    return (
        <div className='p-3 m-0 border-0 bd-example bd-example-zindex-levels position-relative   d-flex justify-content-center' id='container'>
            <div className='z-3 position-absolute  container-fluid ' id='head'>
                <h1 className='title'>SILBESTRO propiedades</h1>
                <h3>Nuestra experiencia nos abala</h3>
                <h5>Más de 15 años cumpliendo con las expectativas de nuestros clientes</h5>
            </div>
            <div className='z-2 pb-3 position-absolute container-fluid' id='imgContainer' >
                <img src="https://img2.wallspic.com/previews/5/0/7/3705/3705-agente_de_la_propiedad_inmobiliaria-x750.jpg" className="img-fluid position-fixed translate-middle-x" id='img1' alt="Silbestro Porpiedades"></img>
            </div>
            <Footer />
        </div>

    )
}

export default Home;