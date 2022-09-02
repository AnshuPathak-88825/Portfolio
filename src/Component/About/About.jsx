import AboutCss from "./About.css";
import Me from "../../assets/me1.png";
import ME from "../../assets/me1.png";
import { BsAward } from "react-icons/bs";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About</h2>
      <div className="container about-container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt=" About-Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <h5>Experience</h5>
              <small>1+ year working</small>
              <BsAward className="about-icon" />
            </article>

            <article className="about_card">
              <h5>Experience</h5>
              <small>1+ year working</small>
              <VscFolderLibrary className="about-icon" />
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            nihil aperiam suscipit ut aliquam ullam totam nisi odit! Ratione vel
            rerum quo optio, cum expedita quam aspernatur nesciunt laudantium
            sapiente quaerat quisquam corrupti iusto, doloribus molestiae. Et
            unde voluptate est ullam. Incidunt eligendi vitae tempore corrupti
            optio consectetur recusandae? 
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};
export default About;
