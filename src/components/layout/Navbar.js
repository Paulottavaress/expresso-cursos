import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({
  logo,
  backgroundColor
}) => {
  return (
    <div className={backgroundColor ? backgroundColor + ' navbar position-fixed' : ' navbar position-absolute'}>
      <h1>
        <Link to="/">
          <img
            src={logo}
            alt='logo'
            className='navbar-logo'
          />
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/cart'>
            <h3>Carrinho 
              <i className="fa-solid fa-cart-shopping" />
            </h3> 
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
