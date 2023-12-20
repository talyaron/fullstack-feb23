import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"


export interface TextState {
    value: string
}

// const [text, setText] = useState("Add Text HERE:")

// needs to be an object - this is the initial state, as the information in the useState () <---
const initialState:TextState = {
    value: "Add Text HERE:"
}

export const textSlice = createSlice(
    {
    name: "text3",
    initialState,
    reducers: {
        setText: (state, action) => {
            state.value = action.payload
        },
        resetText : (state) => {
            // reset the value
                //  state.value = initialState.value
            //reset the entire state:
                 // state = initialState

            state.value = ""
        },
        setTextAsGili : (state) => {
            state.value = "gili"
        }
    }
})

export const {setText, resetText} = textSlice.actions

export const textSelector = (state:RootState) => state.text.value
export default textSlice.reducer;