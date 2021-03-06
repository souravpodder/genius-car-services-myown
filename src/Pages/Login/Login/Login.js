import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import axios from 'axios';

const Login = () => {

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  let errorElement;

  if (error) {

    errorElement = <p className='text-danger text-center'>{error.message}</p>
  }

  if (user) {
    // navigate(from, { replace: true });
  }


  const handleLogin = async event => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // console.log(email, password);

    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post('http://localhost:5000/token', { email });
    console.log(data);
    localStorage.setItem('accessToken', data.accessToken);
    navigate(from, { replace: true });
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;

    if (email) {
      await sendPasswordResetEmail(email);
      toast('email sent');
    }
    else {
      toast('please enter your email');
    }
  }




  return (
    <div className='w-50 mx-auto mt-5'>

      <PageTitle title="Login" />
      <h4 style={{ textAlign: 'center', fontWeight: '700', color: 'blue' }}>Please Login</h4>

      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>

        <Button className='mx-auto w-50 d-block' variant="primary" type="submit">
          Login
        </Button>
      </Form>

      {errorElement}
      <br />
      <p>New to genius car services? <Link to="/register" className='text-warning fw-bold text-decoration-none' >Register here!</Link></p>
      <p>Forgot password?<button className='btn btn-link text-warning fw-bold text-decoration-none' onClick={resetPassword}>Reset Password</button></p>

      <SocialLogin />


    </div>
  );
};

export default Login;