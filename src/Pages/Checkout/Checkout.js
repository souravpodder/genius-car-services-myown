import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useService from '../../hooks/useService';

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useService(serviceId);
  // console.log(service);
  const [user, loading, error] = useAuthState(auth);
  /* if (user) {
    console.log(user);
  } */

  /* const [user, setUser] = useState({
    name: 'subrata hawlader',
    address: 'zigatala',
    email: 'subrata34@gmail.com',
    phone: '01944545435'
  })

  console.log(user);

  const handleAddressChange = event => {
    const { address, ...rest } = user;
    // console.log(address, rest);
    const newAddress = event.target.value;
    const newUser = { address: newAddress, ...rest };
    console.log(newUser);
    setUser(newUser);

  } */

  const handlePlaceOrder = event => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: service._id,
      address: event.target.address.value,
      phone: event.target.phone.value
    }

    axios.post('http://localhost:5000/order', order)
      .then(response => {
        console.log(response);
        const { data } = response;
        if (data.insertedId) {
          toast('Your Order has been placed!!');
          event.target.reset();
        }
      })

    // console.log(order)
  }

  return (
    <div className='w-50 mx-auto'>
      <h3>please give details for order: {service.name}</h3>
      <form className='mt-5' onSubmit={handlePlaceOrder}>
        <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" id="" placeholder='name' readOnly disabled required /><br />
        <input className='w-100 mb-2' disabled type="text" value={user?.email} name="email" id="" placeholder='email' readOnly required /><br />
        <input className='w-100 mb-2' type="text" value={service.name} readOnly disabled name="service" id="" placeholder='service' required /><br />
        <input className='w-100 mb-2' type="text" name="address" id="" placeholder='address' required /><br />
        <input className='w-100 mb-2' type="text" name="phone" id="" placeholder='phone' required /><br />
        <input className='btn btn-primary' type="submit" value="place Order" />
      </form>
    </div>
  );
};

export default Checkout;