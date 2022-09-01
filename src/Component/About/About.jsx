import AboutCss from "./About.css";
import Me from '../../assets/me1.png';
import ME from '../../assets/me1.png';

const About = () => {
  return <section id="about">
    <h5>Get To Know</h5>
    <h2>About</h2>
    <div className="container about-container">
      <div className="about_me">
        <div className="about_me-image">
        <img src={Me} alt=" About-Image" />

        </div>
      </div>
      
    </div>
  </section>;
};
export default About;
