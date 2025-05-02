import React, { useRef, useState } from 'react'
import './Styles/ContactStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassStart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { sendEmail } from '../Constants/EmailService';
import { faFacebook, faGithub, faInstagram, faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import { SocialMediaLinks } from '../Constants/SocialMediaFunctions';

const Contact = () => {
  const form = useRef(); 
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if(!name || !email || !message){
      toast.error("All Required Fields Must Be Filled In", {
        style:{
          backgroundColor: "#282829",
          color: "#ffdb70"
        }
      })
      return;
    }

    if(!emailRegex.test(email)){
      toast.error("Enter a valid Email ID", {
        style: {
          backgroundColor: "#282829",
          color: "#ffdb70"
        }
      });
      return;
    }

    setMessageSent(true);

  try {
    await sendEmail(e, form);
  } catch (error) {
    console.log(error)
    toast.error("Failed to send message. Please try again.", {
      style: {
        backgroundColor: "#282829",
        color: "#ffdb70"
      }
    });
  } finally {
    setMessageSent(false);
  }
  }
  
  return (
    <React.Fragment>
    <ToastContainer/>
    <div className='main-contact-container'>
      <div>
      <form ref={form} onSubmit={handleSubmit}>
    <div style={{width: "605px"}}>
    <div className="top-text-fields">
      <input type="text" placeholder='Full name' className='textfield-style' name="user_name"/>
      <input type="text" placeholder='Email Address' className='textfield-style' name="user_email"/>
    </div>
    <div className="bottomTextArea">
      <textarea id="" rows="15" cols="93" style={{ resize: "none" }} placeholder='Your Message' name="message"></textarea>
    </div>
    <button type='submit' className='button-send' >{messageSent ? <FontAwesomeIcon spinPulse icon={faHourglassStart} style={{marginRight: "10px"}}/> 
    : <FontAwesomeIcon icon={faPaperPlane} style={{marginRight: "10px"}}/>}{messageSent ? "Sending..." : "Send Message"}</button>
    </div>
    </form>
      </div>
      <div className='main-side-column'>
      <div className='social-media'>
        <h3>Find Me Online</h3>
        <ul>
          <li><FontAwesomeIcon icon={faInstagram} color='#d62976' style={{ fontSize: "18px" }} onClick={() => SocialMediaLinks("Instagram")}/></li>
          <li><FontAwesomeIcon icon={faFacebook} color='#1877F2' style={{ fontSize: "18px" }}/></li>
          <li><FontAwesomeIcon icon={faGithub} color='#fafafa' style={{ fontSize: "18px" }} onClick={() => SocialMediaLinks("Github")}/></li>
          <li><FontAwesomeIcon icon={faWhatsapp} color='#25D366' style={{ fontSize: "18px" }}  onClick={() => SocialMediaLinks("Whatsapp")}/></li>
          <li><FontAwesomeIcon icon={faLinkedin} color='#0077B5' style={{ fontSize: "18px" }} onClick={() => SocialMediaLinks("LinkedIn")}/></li>
          <li><FontAwesomeIcon icon={faXTwitter} color='#1DA1F2' style={{ fontSize: "18px" }}/></li>
        </ul>
      </div>
      <div className="address-map">
        <h3>Address</h3>
        <div className='map-figure'>
        <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500.19711758294073!2d77.76867611731767!3d12.993595188795307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0f004c2de041%3A0x7e8e6f56f84b776e!2sChandra%20Kaantham!5e0!3m2!1sen!2sin!4v1745403040576!5m2!1sen!2sin"
    width="75%"
    height="197"
    style={{ border: 0, borderRadius: "5px"}}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="My Location"
  ></iframe>
        </div>
      </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Contact
