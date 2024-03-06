import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import loginContext from '../../utilis/useContext/loginContext';
import { URL } from '../../utilis/constant';

function UserProfile() {
    const [login, setLogin] = useContext(loginContext);

    useEffect(() => {
        // Fetch user data from backend
        getUserData();
    }, []);

    const getUserData = async () => {
        try {
            const res = await axios.get(`${URL}/login/success`, { withCredentials: true });
            console.log("User data:", res.data);
            // Update login context with user data
            setLogin(res.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    return (
        <>
            {/* User profile component */}
        </>
    );
}

export default UserProfile;