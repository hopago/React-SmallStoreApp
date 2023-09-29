import './contact.scss';
import {
    Facebook,
    Instagram,
    Twitter,
    Google,
    Pinterest
} from '@mui/icons-material';


const Contact = () => {
  return (
    <div className="contact">
        <div className="wrapper">
            <span>Be in touch with us:</span>
            <div className="mail">
                <input type="text" placeholder='Enter your email' />
                <button>Join Us</button>
            </div>
            <div className="icons">
                <Facebook />
                <Instagram />
                <Twitter />
                <Google />
                <Pinterest />
            </div>
        </div>
    </div>
  )
}

export default Contact
