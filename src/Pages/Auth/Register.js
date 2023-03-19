import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import './Authpage.css'
const Register = () => {
  return (
    <div className='authpage'>
    <Navbar/>

    <div className='authcont'>
        <img src='https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='login'/>
        <form className='authform'>
            <h1>Signup</h1>
            <div className='form-group-row'>
              <div className='formgroup'>
              <label htmlFor='name'>First Name</label>
              <input type={'text'} id="fname"/>
              </div>
              <div className='formgroup'>
              <label htmlFor='lname'>Last Name</label>
              <input type={'text'} id="lname" />
              </div>
            </div>
            <div className='formgroup'>
                <label htmlFor='email' >Email</label>
                <input type={'email'} id="email" />
            </div>

           <div className='form-group-row'>
           <div className='formgroup'>
                <label htmlFor='password' >Password</label>
                <input type={'password'} id="password" />
            </div>
            <div className='formgroup'>
                <label htmlFor='cpassword' >Confirm Password</label>
                <input type={'password'} id="cpassword" />
            </div>
           </div>
            <Link to={'/forgot'} className="stylenone"><p>Already have an Account ?</p></Link>
            <button className='btn'>Signup</button>
            <h2 className='or'>OR</h2>
            <Link to={'/register'}  className="stylenone"><button className='btn'> Login</button></Link>
        </form>
    </div>
</div>
  )
}

export default Register