import { createSlice } from "@reduxjs/toolkit";
import { ConfigurationState } from "../types/store.types";

const initialState: ConfigurationState = {
    isAuthorized: false
};

export const configurationSlice = createSlice({
    name: 'configuration',
    initialState,
    reducers: {
        getAuthorized: (state, action)=>{},
        setIsAuthorized: (state, action)=>{
            state.isAuthorized = action.payload; 
        }
    }
});

export const {getAuthorized, setIsAuthorized} = configurationSlice.actions;

export default configurationSlice.reducer;