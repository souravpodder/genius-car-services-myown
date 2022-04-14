import React from 'react';
import './Service.css';

const Service = ({ service }) => {
  const { img, name, price, description } = service;
  return (
    <div className='single-service'>
      <img className='service-img w-100' src={img} alt="" />
      <h2>{name}</h2>
      <p>price: {price}</p>
      <p><small>{description}</small></p>
      <button className='btn btn-primary'>Book: {name}</button>
    </div>
  );
};

export default Service;