import './Register.css';
import React from 'react';

function Register({children, estado, cambiarEstado}){
    return (
        <div>
          {estado && 
          <div className='Overlay'>
            <div className='ContenedorModal'>
              <div className='EncabezadoModal'>
                <h3>Iniciar Sesión</h3>
              </div>
              <button className='BotonCerrar' onClick={()=> cambiarEstado(false)}>X</button>
              {children}
            </div>
          </div>
          }
        </div>
      );
}

export default Register;