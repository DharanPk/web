import React from 'react'
import './Login.css'
import './left.jpg'

function Login() {
  return (
    <>
    <div className='top'>
    <div className='main'>
        <div className='left'>
         <img src="left.jpg" alt="" />  
        </div>
        <div className='right'>
        <input type="text" placeholder='E-Mail'/>
        <input type="text" placeholder='Phone Number'/>
        <p>Forgot ?</p>
        <button className='login'>Login</button>
        <h3 className='or'>or</h3>
        <div className='down'>
        <button className='google '><i class="fa-brands fa-google"></i>  Google</button>
        <button className='face'><i class="fa-brands fa-square-facebook"></i> Facebook</button>
        </div>
        <p className='reg'>Don't have an account? <b>Register Here</b></p>
        </div>
        </div>
        </div>


    </>
  )
}

export default Login