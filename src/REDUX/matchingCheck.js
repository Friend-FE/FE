import { createSlice } from '@reduxjs/toolkit';

export const matchingSlice = createSlice({
    name: "matching",
    initialState: [],
    reducers: {
        addId: (state, action) => {
            const { userId, userNickname } = action.payload;
            state.push({ id: userId, name: userNickname });
        },
        removeId: (state) => {
            state.splice(0, state.length);
        }
    },
});

export const { addId, removeId } = matchingSlice.actions;
export default matchingSlice.reducer;