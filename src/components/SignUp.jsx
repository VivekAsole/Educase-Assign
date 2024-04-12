import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {

    const navigate = useNavigate()

    return (
        <div className='signup-box'>
            <h1>
                Create your PopX account
            </h1>
            <form>
                <div className='input-wrapper'>
                    <label htmlFor="first">Full Name</label>
                    <input type="text" placeholder='Enter full name' />
                </div>
                <div className='input-wrapper'>
                    <label htmlFor="">Phone number</label>
                    <input type="text" placeholder='Enter phone number' />
                </div>
                <div className='input-wrapper'>
                    <label htmlFor="">Email Address</label>
                    <input type="text" placeholder='Enter email address' />
                </div>
                <div className='input-wrapper'>
                    <label htmlFor="">Password</label>
                    <input type="text" placeholder='Enter password' />
                </div>
                <div className='input-wrapper' id='company-name'>
                    <label htmlFor="">Company name</label>
                    <input type="text" placeholder='Enter company name' />
                </div>
                <div className='radio-box'>
                    <p>Are you an agency?</p>
                    <div>
                        <input type="radio" name='radio' className='radio' id='radio1'/>
                        <label>Yes</label>
                        <input type="radio" name='radio' className='radio' id='radio2'/>
                        <label>No</label>
                    </div>
                </div>
                <button 
                className='button_create_account'
                onClick={ () => navigate("/profile")}
                ><span>Create Account</span>
                </button>
            </form>
        </div>
    )
}

export default SignUp