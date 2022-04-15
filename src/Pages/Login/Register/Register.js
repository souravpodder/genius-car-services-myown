import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
  const [agree, setAgree] = useState(false);

  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  if (user) {
    navigate('/');
  }

  const handleRegister = event => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;
    if (agree) {
      createUserWithEmailAndPassword(email, password);
    }


  }


  return (
    <div className='register-form mt-5'>
      <h4 style={{ textAlign: 'center', fontWeight: '700', color: 'blue' }}>Please Register!</h4>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder='your name' />
        <input type="email" name="email" id="" placeholder='your email' required />
        <input type="password" name="password" id="" placeholder='your password' required />
        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
        {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept all terms and conditions</label> */}
        <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms">Accept all terms and conditions</label>
        <input
          disabled={!agree}
          className='btn btn-primary d-block w-50 mx-auto mt-2'
          type="submit"
          value="Register" />

      </form>

      <p>Already Registered? <Link to="/login" className='text-warning fw-bold text-decoration-none' >Login</Link></p>

      <SocialLogin />
    </div>
  );
};

export default Register;