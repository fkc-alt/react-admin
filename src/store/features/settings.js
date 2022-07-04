import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isCollapsed: false,
}

export const counterSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setCollapsed(state){
            state.isCollapsed = !state.isCollapsed;
        }
    }
})

export default counterSlice.reducer;