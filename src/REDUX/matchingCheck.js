import { createSlice } from '@reduxjs/toolkit';

export const matchingSlice = createSlice({
    name: "matching",
    initialState: [],
    reducers: {
        addId: (state, action) => {
            const addStateArray = [...state, { id: action.payload }];
            console.log(addStateArray);
            return addStateArray;
        },
        removeId: () => {
            return [];
        }
    },
});

export const { addId, removeId } = matchingSlice.actions;
export default matchingSlice.reducer;