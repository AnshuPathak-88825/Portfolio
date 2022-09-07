import ContactCss from "./Contact.css";
import {MdOutlineMail} from "react-icons/md"
import {ImTwitter} from "react-icons/im"
import {AiFillLinkedin} from "react-icons/ai"
const Contact=()=>{
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact-container">
                <div className="contact_option">
                    <article className="contact_name">
                        <MdOutlineMail/>
                        <h4>Email</h4>
                        <h5>shubhanshupathak88825@gmail.com</h5>
                        <a href="mailto:shubhanshupathak88825@gmail.com">Send a Message</a>

                    </article>
                    <article className="contact_name">
                        <ImTwitter/>
                        <h4>Twitter</h4>
                        <h5>@Anshu_pathak12</h5>
                        <a href="https://twitter.com/Anshu_pathak12">Send a Message</a>

                    </article>
                    <article className="contact_name">
                        <AiFillLinkedin/>
                        <h4>Email</h4>
                        <h5>shubhanshupathak88825@gmail.com</h5>
                        <a href="https://www.linkedin.com/in/anshu-kumar-pathak/">Send a Message</a>

                    </article>
                </div>
            </div>
        </section>
    )
}
export default Contact;