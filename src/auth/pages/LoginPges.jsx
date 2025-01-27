import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const LoginPges = () => {

  const navigate = useNavigate();
  const context = useContext(AuthContext);


  const onLogin = () => {

    const pathname = localStorage.getItem('pathname') || '/marvel';

    context.dispatchLogin('Torres');

    navigate(pathname, {
      replace: true
    })
  }

  return (
    <div className='container-md pt-5'>
      <h2>Iniciar sesion {'->'} "Demo"</h2>
      <hr />
      <button className='btn btn-primary'onClick={onLogin} >
        login</button>
    </div>
  )
}
