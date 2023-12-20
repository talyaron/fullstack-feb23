import React from 'react'
import { resetText, setText } from '../features/text/textSlice'
import { useAppDispatch } from '../app/hooks'
import { Link } from 'react-router-dom'
import Output from './Output'

const Input = () => {
    // const [textState, setTextState] = useState("")
    const dispatch = useAppDispatch()

    const handleChangeText = (ev: React.FormEvent<HTMLInputElement>) => {
        dispatch(setText((ev.target as HTMLInputElement).value))
    }


    return (
        <div>
            <input type='text' onInput={handleChangeText} />
            <Link to="/output">this is link</Link>
            <button onClick={() => { dispatch(resetText()) }}>RESET</button>
            <Output />
        </div>
    )
}

export default Input