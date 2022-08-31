import { BsTwitter } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';



const Social=()=>
{
    return (
        <div className="Social">
            <a href="https://twitter.com/Anshu_pathak12"> <BsTwitter/></a>
            <a href="https://www.github.com/AnshuPathak-88825"><BsGithub/></a>
            <a href="https://www.linkedin.com/in/anshu-kumar-pathak/"><BsLinkedin/></a>
            <a href=""><AiOutlineMail/></a>
            <a href="https://www.instagram.com/anshu_pathak12/?hl=en"><AiFillInstagram/></a>
        </div>
 
    )
}
export default Social;