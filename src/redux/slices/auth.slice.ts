import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    email: null;
    name: null;
    id: null;
    createdOn: null;
}

// Define a type for the slice state
interface AuthState {
    isLoading: boolean;
    isAuthed: boolean;
    user: User | null;
}

// Define the initial state using that type
const initialState: AuthState = {
    isLoading: true,
    isAuthed: false,
    user: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.isAuthed = true;
            state.user = action.payload;
        },
        logout: (_state) => {
            return {
                isLoading: false,
                isAuthed: false,
                user: null,
            };
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
