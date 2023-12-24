import React from 'react'
import { useAppDispatch } from '../app/hook'
import { setDay, setDayNight, setNight } from '../features/dayNight/dayNightSlice'

const Setters = () => {
    const dispatch = useAppDispatch()

    const handleSetDay = () => {
        dispatch(setDay())
    }

    return (
        <div>
            <button onClick={handleSetDay}>To Day</button>
            <button onClick={() => { dispatch(setNight()) }}>To Night</button>
            <button onClick={() => { dispatch(setDayNight()) }}>To opposite</button>

            <label htmlFor="day">Day:</label>
            <input type='radio' name='day-night' id='day' onChange={() => { dispatch(setDay()) }} />
            <label htmlFor="night">night:</label>
            <input type='radio' name='day-night' id='night' onChange={() => { dispatch(setNight()) }} />

            
        
        </div>
    )
}

export default Setters