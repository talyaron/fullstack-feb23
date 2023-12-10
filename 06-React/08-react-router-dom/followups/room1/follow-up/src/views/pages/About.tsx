import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div>
      <h1>About</h1>
      <Link to="/">Go Home</Link>
      <button
        onClick={() => {
          navigate("/homepage");
        }}
      >
        Go To homepage
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </button>
    </div>
  );
};

export default About;
