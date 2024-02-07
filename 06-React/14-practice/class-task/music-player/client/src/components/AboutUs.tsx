
const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="video-background">
                <iframe width="1000" height="562" src="https://www.youtube.com/embed/WCcRz-WOw3E" title="Spotify Inspired PowerPoint Presentation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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