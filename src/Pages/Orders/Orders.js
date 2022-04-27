import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  /* 
    useEffect(() => {
      fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => {
          setOrders(data);
        })
    }, [])
   */
  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `http://localhost:5000/orders?email=${email}`;
      try {
        const response = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        setOrders(response.data);
      }
      catch (error) {
        console.log(error.message)
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate('/login');
        }
      }

    }

    getOrders();
  }, [user])





  return (
    <div>
      <h4>The orders are here: {orders.length}</h4>
    </div>
  );
};

export default Orders;