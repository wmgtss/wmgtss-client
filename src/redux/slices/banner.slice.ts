import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface BannerState {
    enabled: boolean;
    message: string;
}

// Define the initial state using that type
const initialState: BannerState = {
    enabled: false,
    message: '',
};

export const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
        setBanner: (state, action: PayloadAction<string>) => {
            state.enabled = true;
            state.message = action.payload;
        },
        hideBanner: (state) => {
            state.enabled = false;
            state.message = '';
        },
    },
});

export const { setBanner, hideBanner } = bannerSlice.actions;

export default bannerSlice.reducer;
