import { useReducer, useState } from 'react'
import { CounterActionType, reducer } from './reducer'


const ReducerExample = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 })
    const [amount, setAmount] = useState(0)

    return (
        <div>
            <button onClick={() => dispatch({ type: CounterActionType.ADD, payload: 0 })}>+</button>
            <p>{state.counter}</p>
            <button onClick={() => dispatch({ type: CounterActionType.SUB, payload: 0 })}>-</button>
            <button onClick={() => dispatch({ type: CounterActionType.BY_AMOUNT, payload: amount })}>ADD By PayLoad</button>
            <input type='text' value={amount} onInput={(ev) => { setAmount(Number((ev.target as HTMLInputElement).value)) }} />
        </div>
    )
}

export default ReducerExample

