import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
  // Determine text color based on background color
  const textColor = props.mode === 'light' ? 'dark' : 'light';

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <NavLink className={`navbar-brand text-${textColor}`} to="/">{props.title}</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={`nav-link text-${textColor}`} aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link text-${textColor}`} to="/about">{props.aboutTitle}</NavLink>
            </li>
          </ul>
          <div className='d-flex'>
            <div className='bg-primary rounded mx-2' onClick={()=>{props.toggleMode('primary')}} style={{height : '30px', width : '30px', cursor : 'pointer'}}></div>
            <div className='bg-danger rounded mx-2' onClick={()=>{props.toggleMode('danger')}} style={{height : '30px', width : '30px', cursor : 'pointer'}}></div>
            <div className='bg-success rounded mx-2' onClick={()=>{props.toggleMode('success')}} style={{height : '30px', width : '30px', cursor : 'pointer'}}></div>
            <div className='bg-warning rounded mx-2' onClick={()=>{props.toggleMode('warning')}} style={{height : '30px', width : '30px', cursor : 'pointer'}}></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTitle: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Default Title Here',
  aboutTitle: 'Default About Here',
};
