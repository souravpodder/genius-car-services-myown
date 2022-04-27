import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
  const location = useLocation();
  // console.log('user from require auth', user);

  if (loading) {
    return <Loading />
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
    // console.log(user);
    return (

      <>
        <h3 className='text-danger'>Your email is not verified!</h3>
        <h3 className='text-success'>Please verify your email</h3>
        <button className='btn btn-primary'
          onClick={async () => {
            await sendEmailVerification();
            toast('Sent email');
          }}
        >Send Email Again</button>

      </>

    );
  }

  return children;

};

export default RequireAuth;