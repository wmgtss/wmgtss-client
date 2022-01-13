import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth.slice';
import pwnedReducer from './slices/pwned.slice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        pwned: pwnedReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
