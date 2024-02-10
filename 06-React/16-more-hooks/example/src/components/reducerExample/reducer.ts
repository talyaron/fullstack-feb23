export enum CounterActionType {
    ADD = "ADD",
    SUB = "SUB",
    BY_AMOUNT = "BY_AMOUNT"
}

interface CounterAction {
    type: CounterActionType
    payload: number
}

interface CounterState {
    counter: number
}

export const reducer = (state: CounterState, action: CounterAction) => {
    switch (action.type) {
        case CounterActionType.ADD:
            return { counter: state.counter + 1 };
        case CounterActionType.SUB:
            return { counter: state.counter - 1 };
            case CounterActionType.BY_AMOUNT: 
                return {counter: state.counter + action.payload}
        default:
            return state
    }
}