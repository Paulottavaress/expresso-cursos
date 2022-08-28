import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({
  logo,
  backgroundColor
}) => {
  return (
    <div className={backgroundColor ? backgroundColor + ' navbar position-fixed' : ' navbar position-absolute'}>
      <Link to="/">
        <img
          src={logo}
          alt='logo'
          className='logo'
        />
      </Link>
      <ul>
        <li>
          <Link to='/cart'>
            {(window.innerWidth > 319) ? (
            <h3>Carrinho 
              <i className="fa-solid fa-cart-shopping" />
            </h3> 
            ) : (
            <i className="fa-solid fa-cart-shopping" />
            )}
          </Link>
        </li>
      </ul>
    </div>
  )
}

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string
}

Navbar.defaultProps = {
  logo: '/assets/images/logos/logo-v1-white-resized.png'
}

export default Navbar;
