import {configureStore, createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",

    initialState: {username: ""},

    reducers: {
        //{userName : "sogand"}
        logIn: (state, action) => {
            state.username = action.payload.username;
        }, logOut: (state) => {
            state.username = ""
        }
    }
})
export const {logIn, logOut} = userSlice.actions;
export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})