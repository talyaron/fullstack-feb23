import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to="/day-night">go to day-night</Link>
            Home
        </div>
    )
}

export default Home