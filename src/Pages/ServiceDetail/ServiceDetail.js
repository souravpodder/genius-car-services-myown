import { Link, useParams } from 'react-router-dom';
import useService from '../../hooks/useService';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useService(serviceId);


  console.log(service);

  return (
    <div>
      <h3>service details: {service.name} Price: ${service.price}</h3>
      <div className='text-center'>
        <Link to={`/checkout/${serviceId}`}>
          <button className='btn btn-primary'>Proceed to Checkout</button>
        </Link>
      </div>

    </div>
  );
};

export default ServiceDetail;