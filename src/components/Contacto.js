import React from 'react';


export const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>

      <div className='contact-container'>
        <form className='contact' action='mailto:mariaremo22@gmail.com'>
          <input type='text' placeholder='Nombre'></input>
          <input type='text' placeholder='Apellidos'></input>
          <input type='text' placeholder='Email'></input>
          <textarea placeholder='Motivo de contacto'></textarea>
          <input type='submit' value='Enviar'></input>
        </form>

        <div class="contact-info">
          <h2>Mis datos</h2>
          <p><i class="fas fa-map-marker-alt"></i> Ubicación: Málaga</p>
          <p><i class="fas fa-phone"></i> Teléfono: 666 65 10 65</p>
          <p><i class="fas fa-envelope"></i> Email: mariaremo22@gmail.com</p>
          <p><i class="fas fa-birthday-cake"></i> Cumpleaños: 28/12/1994</p>
        </div>

      </div>
    </div>
  );
};
