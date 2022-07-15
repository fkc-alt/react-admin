import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isCollapsed: false,
}

export const settingSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setCollapsed(state, { value }){
            state.isCollapsed = value ?? !state.isCollapsed;
        }
    }
})

export default settingSlice.reducer;