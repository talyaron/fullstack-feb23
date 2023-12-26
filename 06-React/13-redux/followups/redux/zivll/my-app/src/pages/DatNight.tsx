import React from 'react'
import ButtonsSetters from '../components/ButtonsSetters'
import { useAppSelector } from '../app/hooks'
import { dayNightSelector } from '../features/dayNightSlice'

const DatNight = () => {
    const dayLight = useAppSelector(dayNightSelector)
    return (
        <div>{dayLight ? <>🌞</> : <>🌑</>}<br></br><ButtonsSetters /></div>

    )
}

export default DatNight