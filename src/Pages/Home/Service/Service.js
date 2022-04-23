import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
  const { img, name, price, description, _id } = service;
  const navigate = useNavigate();

  const navigateToServiceDetails = (id) => {
    navigate(`/service/${id}`);
  }
  return (
    <div className='single-service'>
      <img className='service-img w-100' src={img} alt="" />
      <h2>{name}</h2>
      <p>price: {price}</p>
      <p><small>{description}</small></p>
      <button onClick={() => navigateToServiceDetails(_id)} className='btn btn-primary'>Book: {name}</button>
    </div>
  );
};

export default Service;