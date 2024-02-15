import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLoggedIn: false,
        userId: null 
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.id = action.payload; 
        },
        logout: state => {
            state.isLoggedIn = false;
            state.id = null; 
        }
    },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
