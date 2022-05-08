import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ logo }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <Link to="/">
          <img
            src={logo}
            alt=""
            style={{ width:'50%' }}
          />
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/mopp'>
            <p className='h3'>Mopp</p>
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
  logo: '/assets/images/logo-v2-resized.png'
}

export default Navbar;
