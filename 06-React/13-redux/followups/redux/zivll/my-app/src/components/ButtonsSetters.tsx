import React from 'react'
import { useAppDispatch } from '../app/hooks'
import { setDay, setDayLight, setNight } from '../features/dayNightSlice'
import { Link, useNavigate } from 'react-router-dom'

const ButtonsSetters = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    return (
        <div>
            {/* <Link to=""></Link> */}

            <button onClick={() => { dispatch(setDay()) }}>to day</button>
            <button onClick={() => { dispatch(setNight()) }}>to night</button>
            <button onClick={() => { dispatch(setDayLight()) }}>to opposite</button>
            <label htmlFor='day'>Day:</label>
            <input type="radio" name='day-night' id='day' onChange={() => { dispatch(setDay()) }} />
            <label htmlFor='night'>Night:</label>
            <input type="radio" name='day-night' id='night' onChange={() => { dispatch(setNight()) }} />
            <br />
            <button onClick={() => { navigate(-1) }}>Go back</button>
        </div>
    )
}

export default ButtonsSetters