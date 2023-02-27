import React from "react";
import "./Contact.css";
import { Button, IconButton } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import BusinessIcon from "@mui/icons-material/Business";
import IosShareIcon from "@mui/icons-material/IosShare";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="box">
        <h2 className="boxHeader">
          <EmailIcon />
          Contact Us
        </h2>
        <div className="emailBox">
          <a className="mailBtn" href="mailto:mewHelp@gmail.com">
            <Button>
            selfimobile.help@gmail.com <IosShareIcon />
            </Button>
          </a>
        </div>
      </div>


      <div className="box">
        <h2 className="boxHeader">
          <BusinessIcon />
          Address
        </h2>
        <div className="addressBox">
        <iframe title='address' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29535.530318864017!2d73.11911321562498!3d22.2802137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc760f902dd5b%3A0xd8ed2ee101aff9dc!2sSELFIE%20MOBILE!5e0!3m2!1sen!2sin!4v1677505370230!5m2!1sen!2sin" width="50%" height="200%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        </div>
      </div>
    </div>
  );
};

export default Contact;
