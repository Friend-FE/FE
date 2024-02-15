import { createSlice } from '@reduxjs/toolkit';

export const emailSlice = createSlice({
    name: "email",
    initialState: {
        isCertify: false,
        email : null
    },
    reducers: {
        certify:(state, action)  => {
            state.isCertify = true;
            state.email = action.payload;
        },
        notCertify: (state, action) => {
            state.isCertify = false;
            state.email = action.payload;
        }
    },
});

export const {certify , notCertify}  = emailSlice.actions;
export default emailSlice.reducer;