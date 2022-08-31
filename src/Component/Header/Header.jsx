import HeaderCss from './Header.css';
import ME from '../../assets/me.png';
import CTA from './CTA';
import Social from './Social';
const Header=()=>{
    return (
        <header>
            <div className="container header_container">
                <h5>Hello,I'm </h5>
                <h1>Anshu Pathak</h1>
                <h5 className='text-light'>Fullstack -developer </h5>
                <CTA />
                <div className="me">
                    <img src={ME} alt="" />
                </div>
                <a href="#contact" className='scroll_down'>Scroll down</a>
                <Social/>

            </div>
        </header>
    )
}
export default Header;