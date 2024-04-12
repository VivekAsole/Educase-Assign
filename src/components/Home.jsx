import React from 'react'
import { useNavigate } from "react-router-dom"

function Home() {

    const navigate = useNavigate();

    return (
        <div className='homepage_text_box'>
            <h1>Welcome to PopX</h1>
            <p className='homepage_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <button
                className='button_create_account'
                onClick={() => navigate('/sign-up')}
            ><span>Create Account</span>
            </button>
            <button
                className='button_login'
                onClick={() => navigate('/login')}
            ><span>Already Registered? Login</span>
            </button>
        </div>
    )
}

export default Home