import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {logOut} from '../Redux/actions'

const NavBar = (props) => {

  const handleClick = () => {
      console.log("you are now logging out");
      props.logOut()
      localStorage.clear()
  }

  return(
    <ul className="nav">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <button onClick={handleClick}>Log out</button>
      </li>
    </ul>
  )
};

export default connect(null, {logOut})(NavBar);
