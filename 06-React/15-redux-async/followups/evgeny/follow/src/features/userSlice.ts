
import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { getUserFakeApi } from "./userAPI"

enum Status {
    IDLE="idle",
    LOADING="loading",
    FIELD="failed"
}

export interface User{
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
            "lat": string,
            "lng": string
        }
    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }
}

interface UserState{
    Value:User | null
    status: Status
}

const initialState: UserState={
    value:null,
    status:Status.IDLE
}

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        logoutUser: (state)=>{
            state.value=initialState.Value
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getUserFakeApi.pending,(state)=>{
            state.status=Status.LOADING
        })
        .addCase(getUserFakeApi.fulfilled,(state,action)=>{
            state.status=Status.IDLE,
            state.Value=action.payload
        })
        .addCase(getUserFakeApi.rejected, (state) => {
            state.status = Status.FAILED
        })
    }

})

export const userSelector = (state: RootState) => state.user.value
export const userStatusSelector = (state: RootState) => state.user.status
export const userstateSelector = (state: RootState) => state.user

export default userSlice.reducer