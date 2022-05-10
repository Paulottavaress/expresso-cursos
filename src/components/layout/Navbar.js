import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ logo }) => {
  return (
    <div className="navbar position-absolute">
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
          <Link to='/mopp'>
            <p className='h3 text-primary'>Mopp</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

Navbar.propTypes = {
  logo: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  logo: '/assets/images/logos/logo-v1-resized.png'
}

export default Navbar;
