import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth.slice';
import pwnedReducer from './slices/pwned.slice';
import bannerReducer from './slices/banner.slice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        pwned: pwnedReducer,
        banner: bannerReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
