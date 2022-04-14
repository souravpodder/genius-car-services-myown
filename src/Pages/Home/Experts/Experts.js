import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
  { id: 1, name: 'robert junior', img: expert1 },
  { id: 2, name: 'john smith', img: expert2 },
  { id: 3, name: 'tom holland', img: expert3 },
  { id: 4, name: 'jonathan rock', img: expert4 },
  { id: 5, name: 'david williams', img: expert5 },
  { id: 6, name: 'browny junior', img: expert6 }
]

const Experts = () => {
  return (
    <div className='container' >
      <h1 className='text-center text-primary my-5'>our experts</h1>
      <div className="row g-5 ">

        {
          experts.map(expert => <Expert key={expert.id} expert={expert} />)
        }

      </div>
    </div>
  );
};

export default Experts;