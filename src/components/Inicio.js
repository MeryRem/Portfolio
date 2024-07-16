import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons';

export const Inicio = () => {
  return (
    <div className='home'>

      <h1>
        Hola, soy <strong>María Redondo</strong>, bienvenid@ a mi portfolio.
      </h1>

      <h2 className='title'>
        <Link to="/contacto">Contacta conmigo</Link>
        <Link to="/curriculum">Mi currículum</Link>
      </h2>

      <h3>Descubre más sobre mí y mi trabajo en diferentes plataformas:</h3>


      <div className='social-links'>
        <a href="https://www.linkedin.com/in/mar%C3%ADa-redondo-molina-941a90165/" target="_blank" rel="noopener noreferrer" className="social-link">
          <span>LinkedIn</span>
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" />
        </a>
        <a href="https://www.behance.net/mararedondo1" target="_blank" rel="noopener noreferrer" className="social-link">
          <span>Behance</span>
          <FontAwesomeIcon icon={faBehance} size="2x" className="icon" />
        </a>
      </div>


      {/* <section className='last-works'>

        <h2 className='heading'>Estos son algunos de mis proyectos de frontend y desarrollo web</h2>
        <p></p>

        <ListadoTrabajos limite="2" />



      </section> */}



    </div>
  )
}
