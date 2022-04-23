import React, { useEffect, useState } from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';
// import repair1 from '../../../images/services/repair1.png';


const Services = () => {
  const [services, setServices] = useServices();

  return (
    <div className='container my-5' id='services'>
      <h3 className='services-title'>Our Services:</h3>
      <div className='services-container'>

        {
          services.map(service => <Service
            key={service._id}
            service={service}
          ></Service>)
        }
      </div>

    </div>
  );
};

export default Services;