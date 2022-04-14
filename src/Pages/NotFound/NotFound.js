import React from 'react';

import notfound from '../../images/notfound.png';

const NotFound = () => {
  return (
    <div>
      <h4>sorry! page not found</h4>
      <img className='w-100' src={notfound} alt="" />
    </div>
  );
};

export default NotFound;