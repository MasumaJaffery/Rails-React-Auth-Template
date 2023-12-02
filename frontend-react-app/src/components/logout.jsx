import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../components/redux/slices/authSlice';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutMessage, setLogoutMessage] = useState('');

  const handleLogout = async () => {
    try {
      // Dispatch the logout action
      await dispatch(logout());
      setLogoutMessage('Logout successful');
      navigate('/'); // Navigate to the desired route after successful logout
    } catch (error) {
      setLogoutMessage('Logout failed');
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      {logoutMessage && <p>{logoutMessage}</p>}
    </div>
  );
};

export default Logout;