import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    defaultSelectedKeys: ["Dashboard"],
    isCollapsed: false,
}

export const counterSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setDefaultSelectedKeys(state, payload){
            state.defaultSelectedKeys = [payload.value];
        },
        setCollapsed(state){
            state.isCollapsed = !state.isCollapsed;
        }
    }
})

export default counterSlice.reducer;