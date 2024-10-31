// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

const initialState = {
  currentUser: null,
  userLoggedIn: false,
  isEmailUser: false,
  isGoogleUser: false,
  loading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.currentUser = action.payload.user;
      state.userLoggedIn = !!action.payload.user;
      state.isEmailUser = action.payload.isEmailUser;
      state.isGoogleUser = action.payload.isGoogleUser;
      state.loading = false;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setUser, setLoading } = authSlice.actions;

export const initializeAuth = () => (dispatch) => {
  dispatch(setLoading(true));
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const isEmailUser = user.providerData.some(
        (provider) => provider.providerId === 'password'
      );
      dispatch(setUser({ user, isEmailUser, isGoogleUser: false }));
    } else {
      dispatch(setUser({ user: null, isEmailUser: false, isGoogleUser: false }));
    }
  });
};

export default authSlice.reducer;