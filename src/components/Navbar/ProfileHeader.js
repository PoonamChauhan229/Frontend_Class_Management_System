import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';
import image from '../../utilis/img/undraw_profile.svg';

const ProfileHeader = () => {
    const [open, setOpen] = useState(false); // Change initial state to false

    const ComponentDropdownData = [
        {
            first: "Profile",
            second: "Logout",
            linkredirect1: "profile",
            linkredirect2: "logout"
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
            <li className="nav-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Link className="nav-link collapsed dropdown-toggle" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Profile Name</span>
                    <img className="img-profile rounded-circle" alt="" src={image} />
                </Link>
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
