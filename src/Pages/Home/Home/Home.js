import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <PageTitle title="Home" />
      <Banner />
      <Services />
      <Experts />
    </div>
  );
};

export default Home;