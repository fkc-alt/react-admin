import { createSlice } from '@reduxjs/toolkit'
import { getToken, setToken } from '@/utils'
const initialState = {
    token: getToken(),
    roleList: [5],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken(state, { value }){
            state.token = value;
            setToken(value);
        }
    },
})

export default userSlice.reducer;