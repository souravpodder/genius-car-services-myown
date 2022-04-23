import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handleDeleteService = (id) => {
    const proceed = window.confirm('Are you sure to delete this service?');
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const remainingServices = services.filter(service => service._id !== id);
          setServices(remainingServices);
        })

    }
  }


  return (
    <div className='w-50 mx-auto'>
      <h3>Manage Your Services</h3>
      {
        services.map(service => <h3 key={service._id} >{service.name} <button onClick={() => handleDeleteService(service._id)}>X</button></h3>)
      }
    </div>
  );
};

export default ManageServices;