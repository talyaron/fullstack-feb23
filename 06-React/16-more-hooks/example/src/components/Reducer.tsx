import React, { useReducer } from 'react'

enum CountActionKind {
    INCREASE = 'INCREASE',
    DECREASE = 'DECREASE',
}

// An interface for our actions
interface CountAction {
    type: CountActionKind;
    // payload: number;
}

interface CountState {
    count: number;
}

function reducerFunction(state: CountState, action: CountAction) {
    switch (action.type) {
        case CountActionKind.INCREASE:
            return { count: state.count + 1 };
        case CountActionKind.DECREASE:
            return { count: state.count - 1 };
        default:
            return state
    }
}

const Reducer = () => {

    const [state, dispatch] = useReducer(reducerFunction, { count: 0 })
    return (
        <div>
            <button onClick={() => dispatch({ type: CountActionKind.INCREASE })}>+</button>
            {state.count}
            <button onClick={() => dispatch({ type: CountActionKind.DECREASE })}>-</button>
        </div>
    )
}

export default Reducer