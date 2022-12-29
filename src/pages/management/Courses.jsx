import { useEffect } from 'react';

const Courses = () => {
  useEffect(() => {
    console.log('works');
  }, []);

  return (
    <div className='d-flex'>
      Courses
    </div>
  );
};

export default Courses;