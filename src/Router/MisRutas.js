import React from 'react'
import { Routes, Route, BrowserRouter, NavLink, Navigate } from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { Portafolio } from "../components/Portafolio";
import { Sobremi } from "../components/Sobremi";
import { Curriculum } from "../components/Curriculum";
import { Contacto } from "../components/Contacto";
import { HeaderNav } from '../components/Layout/HeaderNav';
import { Footer } from '../components/Layout/Footer';
import { Proyecto } from '../components/Proyecto';



export const MisRutas = () => {
  return (
    <BrowserRouter>

      {/*Header y Navegacion*/}
      <HeaderNav></HeaderNav>

      {/*Contenido central*/}
      <section className='content'>
        <Routes>
          <Route path='/' element={<Navigate to="/inicio" />}/>
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/portafolio' element={<Portafolio />} />
          <Route path='/sobremi' element={<Sobremi />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/proyecto/:id' element={<Proyecto />} />
          <Route path='*' element={
            <div className='page'>
                  <h1 className='heading'>Error 404</h1>
            </div>
                  } />
        </Routes>
      </section>


      {/*Footer*/}
      <Footer></Footer>

    </BrowserRouter>
  )
}
