import { createSlice } from '@reduxjs/toolkit';


export const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLoggedIn: false 
    },
    reducers: {
        login: state => {
            state.isLoggedIn = true; // 로그인 액션
        },
        logout: state => {
            state.isLoggedIn = false;
        } // 로그아웃 액션
    },
});

export const {login, logout} = loginSlice.actions;
export default loginSlice.reducer;
