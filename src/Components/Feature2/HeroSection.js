import "./HeroSection.css";
import IMG_Profile from "./IMG_Profile.png";

const HeroSection = () => {
    return (
        <div className="hero-container">
          <div className="hero-text"> 
            <h1>Hi - I'm Justin</h1>
            <h2>I'm a self-taught Software Developer that Specializes in React.js.</h2>
          </div>
            <div className="hero-image">
            <img src={IMG_Profile} alt="ProfileImage" />
          </div>
        </div>
    );
}

export default HeroSection;