import TextField from '@mui/material/TextField';

const onChange = e => {
    console.log('e', e.target.value);
    // if (e.target.name === 'zipCode' && e.target.value.trim().length === 9 && registrationInfo.country === 'Brasil') getCep(e.target.value);

    // setRegistrationInfo(e);
};

const Coupon = () => {
    return (
        <div className='d-flex align-items-center gap-3 coupon-field'>
            <h4 className='m-0'>Cupom de desconto:</h4>
            <TextField
              id='discount-coupon-field'
              name='discountCoupon'
              type='text'
              variant='standard'
              color='warning'
              max-
              required
              onChange={onChange}
            />
        </div>
    );
};

export default Coupon;