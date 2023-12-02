import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { user, token } = action.payload;
      sessionStorage.setItem('token', token); // Store token in sessionStorage
      toast.success(`Successful login. Welcome, ${user.name}`);
      return {
        ...state,
        user,
        isAuthenticated: true,
      };
    },
    loginFailure: (state) => {
      sessionStorage.removeItem('token'); // Remove token from sessionStorage on login failure
      // Potentially handle any other necessary actions for login failure
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    },
    logout: (state) => {
      sessionStorage.removeItem('token'); // Remove token from sessionStorage on logout
      // Potentially handle any other necessary actions for logout
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
