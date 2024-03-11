import React from 'react';
import { Link } from 'react-router-dom';
import { URL } from '../../utilis/constant';
import axios from 'axios';

const ProfileDropdown = ({ linkredirect1, linkredirect2, linkredirect3, linkredirect4, first, second, third, fourth }) => {

  const logoutUser = async () => {
    try {
   
      await axios.post('http://localhost:8000/logout', {}, {withCredentials: true});
      window.location.href="http://localhost:3000" 
      
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }

  return (
    <>
      <div className="show dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
        <Link className="dropdown-item" to={"/" + linkredirect1}>
          <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
          {first}
        </Link>
        <Link className="dropdown-item" to={"/" + linkredirect2}>
          <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
          {second}
        </Link>
        <Link className="dropdown-item" to={"/" + linkredirect3}>
          <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
          {third}
        </Link>
        <div className="dropdown-divider"></div>
        <button className="dropdown-item" onClick={logoutUser}>
          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
          {fourth}
        </button>
      </div>
    </>
  );
}

export default ProfileDropdown;
