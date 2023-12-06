import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1>HomePage</h1>
            <Link to="/about">To About</Link>
        </>
    )
}

export default HomePage