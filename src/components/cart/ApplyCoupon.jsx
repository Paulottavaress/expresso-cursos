import { useState } from 'react';
import TextField from '@mui/material/TextField';
import ptBr from '../../internationalization/pt-br';
import { capitalizeFirstLetter } from '../../utils/FormatString';

const ApplyCoupon = () => {
  const [
    isLoading,
    setLoading
  ] = useState(false);

  const onChange = e => {
    console.log('e', e.target.value);
    // if (e.target.name === 'zipCode' && e.target.value.trim().length === 9 && registrationInfo.country === 'Brasil') getCep(e.target.value);
  
    // setRegistrationInfo(e);
  };
  
  const checkIfCouponIsValid = () => {
    setLoading(true);
    console.log('checkIfCouponIsValid');
  };

  return (
    <div className='d-flex flex-wrap align-items-center justify-content-between coupon-field gap-3'>
      <div className='d-flex flex-wrap align-items-center'>
        <h4 className='m-0 white-space-nowrap'>{capitalizeFirstLetter(ptBr.applyCoupon['discountCoupon'])}:</h4>
        <TextField
          id='discount-coupon-field'
          name='discountCoupon'
          type='text'
          variant='standard'
          color='warning'
          required
          onChange={onChange}
        />
      </div>
      <button className="btn btn-primary mr-0px">
        <p
          className='m-0 h6'
          onClick={() => checkIfCouponIsValid()}
        >
          {isLoading ? (
            <span
              className='spinner-border text-light'
              role='status' 
            />
            ) : (
              `${capitalizeFirstLetter(ptBr.applyCoupon['applyDiscount'])}`
          )}
        </p>
      </button>
    </div>
  );
};

export default ApplyCoupon;