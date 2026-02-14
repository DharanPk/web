import React , { useState } from 'react'
import './Login.css'
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleLogin = () => {
    if (!email || !phone) {
      alert("Please fill all fields");
      return;
    }
    sessionStorage.setItem("isLogin", "true");
    const redirectPath = location.state?.from || "/";
    navigate(redirectPath);
  };
  return (
    <>
    <div className='top'>
    <div className='main'>
        <div className='left'>
         <img src="" alt="" />  
        </div>
        <div className='right'>
        <input type="text" placeholder='E-Mail'  value={email}
            onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" placeholder='Phone Number' value={phone}
            onChange={(e) => setPhone(e.target.value)}/>
        <p className='forgot'>Forgot Password?</p>
        <button className='login' onClick={handleLogin}>Login</button>
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