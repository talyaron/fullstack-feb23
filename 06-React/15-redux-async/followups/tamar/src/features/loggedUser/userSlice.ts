
import { createSlice } from '@reduxjs/toolkit';
import { getUserApi } from './userAPI';
import { RootState } from '../../app/store';
enum Status {
    IDLE = "idle",
    LOADING = "loading",
    FAILED = "failed"
}

export interface User {
    "id": number,
    "name": string,
    "username": string,
    "email": string
}

interface UserState {
    value: User | null
    status: Status
}

const initialState: UserState = {
    value: null,
    status: Status.IDLE
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.value = initialState.value
        }
    },
    extraReducers: (builder) => { //the reduceres i builde that are asyncronic from the userAPI.ts
        builder
            .addCase(getUserApi.pending, (state) => {
                state.status = Status.LOADING
            })
            .addCase(getUserApi.fulfilled, (state, action) => {
                state.status = Status.IDLE;
                state.value = action.payload  //get here the data from my getUserApi action
            })
            .addCase(getUserApi.rejected, (state) => {
                state.status = Status.FAILED
            })
    }
})

//the call-function that change the state value and status as we defined in each
export const userSelector = (state: RootState) => state.user.value //change the user value
export const userStatusSelector = (state: RootState) => state.user.status //change the user status
export const userStateSelector = (state: RootState) => state.user //change all the user (value & status)

export default userSlice.reducer

