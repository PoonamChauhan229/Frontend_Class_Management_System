import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';
import image from '../../utilis/img/undraw_profile.svg';

const ProfileHeader = ({profilename,profilepic}) => {
    const [open, setOpen] = useState(false); // Change initial state to false

    const ComponentDropdownData = [
        {
            first: "Profile",
            second: "Settings",
            third:"Activity Log",
            fourth:"Logout",
            linkredirect1: "profile",
            linkredirect2: "settings",
            linkredirect3:"activitylog",
            linkredirect4:"logout"
        }
    ];

    const handleMouseEnter = () => {
        setOpen(true);
    };

    const handleMouseLeave = () => {
        setOpen(false);
    };

    return (
       <>
            <li className="nav-item dropdown no-arrow" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <span className="nav-link dropdown-toggle" id="userDropdown" role="button" type="button"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">{profilename}</span>
                    <img className="img-profile rounded-circle" alt=""
                        src={profilepic}/>
                </span>
                {/* <!-- Dropdown - User Information --> */}

                {/* Dropdown start */}
                {open && ComponentDropdownData.map((element, index) =>
                                    <ProfileDropdown key={index} {...element} />
                                )}
                                {/* Dropdown end */}

                </li>

            
</>
    );
};

export default ProfileHeader;
