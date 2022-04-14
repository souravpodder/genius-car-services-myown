import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const handleRegister = event => {
    event.preventDefault();
    console.log(`email:${event.target.email.value}`);
    console.log(`name: ${event.target.name.value}`);
    console.log(`password: ${event.target.password.value}`)
  }
  return (
    <div className='register-form mt-5'>
      <h4 style={{ textAlign: 'center', fontWeight: '700', color: 'blue' }}>Please Register!</h4>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder='your name' />
        <input type="email" name="email" id="" placeholder='your email' required />
        <input type="password" name="password" id="" placeholder='your password' required />
        <input type="submit" value="Register" />

      </form>

      <p>Already Registered? <Link to="/login" className='text-warning fw-bold text-decoration-none' >Login</Link></p>
    </div>
  );
};

export default Register;