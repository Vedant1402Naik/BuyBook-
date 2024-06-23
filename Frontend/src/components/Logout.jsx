import React from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
    const [authUser, setAuthUser] = useAuth();

    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null,
            });
            localStorage.removeItem("Users");
            toast.success("Logout Successfully");
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            toast.error("Error: " + error.message);
        }
    };

    return (
        <div>
            <button className='bg-red-500 cursor-pointer rounded-md text-white px-4 py-2' onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}

export default Logout;
