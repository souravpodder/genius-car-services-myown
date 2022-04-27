import React from 'react';
import google from '../../../images/social logos/google.png';
import facebook from '../../../images/social logos/facebook.png';
import github from '../../../images/social logos/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const navigate = useNavigate();

  if (loading || loading1) {
    return <Loading />
  }

  if (user || user1) {
    navigate(from, { replace: true });
  }

  if (error || error1) {
    errorElement = <p className='text-danger text-center'>Error: {error?.message}{error1?.message}</p>;


  }

  return (
    <>
      {errorElement}
      <div className='d-flex align-items-center'>
        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
        <p className='mt-3 px-2'>or</p>
        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
      </div>

      <div className=''>
        <button className='btn btn-info w-50 d-block mx-auto my-2' onClick={() => signInWithGoogle()}>
          <img src={google} alt="" />
          <span> Google Sign In</span>
        </button>
        <button className='btn btn-info w-50 d-block mx-auto my-2'>
          <img src={facebook} alt="" />
          <span> Facebook Sign In</span>
        </button>
        <button className='btn btn-info w-50 d-block mx-auto' onClick={() => signInWithGithub()}>
          <img src={github} alt="" />
          <span> Github Sign In</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;