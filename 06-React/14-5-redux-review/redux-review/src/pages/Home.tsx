import React from 'react'
import { useAppSelector } from '../app/hook'
import { dayNightSelector } from '../features/dayNight/dayNightSlice'
import Setters from '../components/Setters'

const Home = () => {
    const dayNight = useAppSelector(dayNightSelector)
    return (
        <div>

            {dayNight}
            <p>{dayNight ? <>☀️</> : <>🌚</>}</p>
            <Setters />
        </div>
    )
}

export default Home