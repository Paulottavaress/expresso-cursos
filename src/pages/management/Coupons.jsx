import { useEffect } from 'react';

const Coupons = () => {
  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = () => {
    fetch(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_GET_COUPONS, {
      method: 'GET'
    }).then((res) => {
      return res.json();
    }).then(data => {
      console.log('data', data);
    });
  };

  return (
    <div className='d-flex'>
      coupons
    </div>
  );
};

export default Coupons;