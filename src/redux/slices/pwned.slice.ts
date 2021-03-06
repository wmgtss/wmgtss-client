import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface PwnedState {
    pwnedCount: number | null;
}

// Define the initial state using that type
const initialState: PwnedState = {
    pwnedCount: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setPwned: (state, action: PayloadAction<number>) => {
            state.pwnedCount = action.payload;
        },
    },
});

export const { setPwned } = authSlice.actions;

export default authSlice.reducer;
