import'./Header.css';
import React, { useState } from 'react';
import ImgLogin from './Imagenes/Login.png';
import Login from '../Login/Login';
import ImgLogo from './Imagenes/Logo.jpeg';
import Register from '../Register/Register';



function Header(){
    const [estadoModal1, cambiarModal1] = useState(false);
    const [estadoModal2,cambiarModal2] = useState(false);
    return(
        <div className='Header'>
            <div className='Logo'>
                <img src={ImgLogo} alt='Logo' className='ImgLogo'/>
            </div>
            <div className='Titulo'>
                <div>
                  <h1>WLF</h1>  
                </div>
                <div>
                    <h3>STREAMING WOLF</h3>
                </div>
            </div>
            <div className='Login'>
                <img className='ImgLogin' src={ImgLogin} alt='Login'></img>
                <button className='BotonInicioSeccion' onClick={() => cambiarModal1(!estadoModal1)} >Iniciar Sección</button>
                <Login
                    estado={estadoModal1}
                    cambiarEstado={cambiarModal1}
                >
                   <div className='Contenido'>
                        <img className='ImgLogo' src={ImgLogo} alt='Logo'/>
                        <label className='label' for='username'>Usuario</label>
                        <input className='input' type='text' id='username' placeholder='Ingresa tu correo o usuario'/>
                        <label className='label'  for='password'>Contraseña</label>
                        <input className='input' type='password' id='password' placeholder='Ingresa tu contraseña'/>

                        <button className='InicioSeccion'>Iniciar Sección</button>
                   </div>
                    
                </Login>
                <button className='Registrarse' onClick={() => cambiarModal2(!estadoModal2)}>Registrarse</button>
                <Register
                    estado={estadoModal2}
                    cambiarEstado={cambiarModal2}
                >
                    <div className='Contenido'>
                        <label className='label' for='name'>Nombre</label>
                        <input className='input' type='text' id='name' placeholder='Escribe tu Nombre'/>
                        <label className='label'  for='password'>Contraseña</label>
                        <input className='input' type='password' id='password' placeholder='Ingresa tu contraseña'/>
                        <label className='label'  for='password'>Nuevamente tu contraseña</label>
                        <input className='input' type='password' id='password' placeholder='Confirmación de Contraseña'/>
                        <label className='label' for='email'>Correo Electronico</label>
                        <input className='input' type='email' id='email'placeholder='Example@micorreo.com'/>

                        <button className='Registrarse'> Registrase</button>
                    </div>
                </Register>
            </div>
        </div>
    );
}

export default Header;
/*

*/