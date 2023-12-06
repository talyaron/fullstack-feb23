import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>About</h1>
            <button onClick={() => {
                navigate("/contact-us")
            }}>Contact Us</button>
            <button onClick={() => {
                navigate(-1)
            }}>Back to HomePage</button>
        </>
    )
}

export default About