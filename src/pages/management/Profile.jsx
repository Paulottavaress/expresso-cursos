import { useEffect } from 'react';

const Profile = () => {
  useEffect(() => {
    console.log('works');
  }, []);

  return (
    <div className='d-flex'>
      Profile
    </div>
  );
};

export default Profile;