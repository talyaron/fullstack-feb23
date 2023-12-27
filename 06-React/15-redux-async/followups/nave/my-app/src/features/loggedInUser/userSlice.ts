import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import {getUserApi} from "../loggedInUser/userApi"

enum Status {
    IDLE = "idle",
    LOADING = "loading",
    FAILED = "failed"
}

export interface User {
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

interface UserState {
    value: User | null
    status: Status
}
// const [user, setUser] = useState({value: null, status: Status.IDLE })

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
    extraReducers: (builder) => {
        builder
        .addCase(getUserApi.pending, (state) => {
            state.status = Status.LOADING
        })
        .addCase(getUserApi.fulfilled, (state, action) => {
            state.status = Status.IDLE;
            state.value = action.payload
        })
        .addCase(getUserApi.rejected, (state) => {
            state.status = Status.FAILED
        })
    }
})

export const userSelector = (state: RootState) => state.user.value
export const userStatusSelector = (state: RootState) => state.user.status
export const userstateSelector = (state: RootState) => state.user

export default userSlice.reducer