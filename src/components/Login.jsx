import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value,
    })
  }

  return (
    <div className='login-box'>
      <h1>Signin to your PopX account</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <form action="">
        <div className='input-wrapper'>
          <label htmlFor="first">Email Address</label>
          <input 
          type="text" 
          name='email' 
          value={formData.email} 
          onChange={(e) => handleChange(e)}
          placeholder='Enter email address' />
        </div>
        <div className='input-wrapper'>
          <label htmlFor="">Password</label>
          <input 
          type="password"
          name='password'
          value={formData.password}
          onChange={(e) => handleChange(e)} 
          placeholder='Enter password' />
        </div>
        <button 
        className={ `button-login-sub ${formData.email && formData.password ? 'button-bg-change' : ''}` } 
        onClick={ () => (formData.email && formData.password) && navigate('/profile')}
        ><span>Login</span>
        </button>
      </form>
    </div>
  )
}

export default Login