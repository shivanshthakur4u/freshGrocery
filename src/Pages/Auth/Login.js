import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import './Authpage.css'
const Login = () => {
  return (
    <div className='authpage'>
        <Navbar/>

        <div className='authcont'>
            <img src='https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='login'/>
            <form className='authform'>
                <h1>Login</h1>
                <div className='formgroup'>
                    <label htmlFor='email' >Email</label>
                    <input type={'email'} id="email" />
                </div>

                <div className='formgroup'>
                    <label htmlFor='password' >Password</label>
                    <input type={'password'} id="password" />
                </div>
                <Link to={'/forgot'} className="stylenone"><p>Forgot Password ?</p></Link>
                <button className='btn'>Login</button>
                <h2 className='or'>OR</h2>
                <Link to={'/register'}  className="stylenone"><button className='btn'>Signup</button></Link>
            </form>
        </div>
    </div>
  )
}

export default Login