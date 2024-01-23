
const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="video-background">
                <div className="overlay"></div> {/* השכבת הרקע הצללה שחורה */}
                <video autoPlay muted loop>

                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="content-container">
                {" "}
                {/* נוסף container לתוכן */}
                <div className="about-us-content">
                    <h1 className="heading">Welcome to TunesHub</h1>
                    <p className="half-width-text">
                        At TunesHub, we believe in the power of music to inspire, motivate,
                        and elevate your soul.
                    </p>
                </div>
                <div className="signup-container">
                    <h2 className="signup-heading">Sign Up Today</h2>
                    <button className="signup-button">Register Now</button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs