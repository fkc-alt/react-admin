import { createSlice } from '@reduxjs/toolkit'
import { getToken } from '@/utils'

const initialState = {
    token: getToken(),
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken(state, action){
            state.token = action.payload;
        }
    }
})

export default userSlice.reducer;