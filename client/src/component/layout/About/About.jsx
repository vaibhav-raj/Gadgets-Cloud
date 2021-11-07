import React from "react";
import "./about.css";
import { Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "12vmax", margin: "2vmax 0" }}
              src="https://vaibhavraj.netlify.app/static/media/profile.5eb74e2d.png"
              alt="creator"
            />
            <Typography>Vaibhav Raj</Typography>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Reach Out to me</Typography>
            <a
              href="https://twitter.com/cloud_gadgets"
              target="blank"
            >
              <TwitterIcon className="TwitterIcon" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100074820930467"
              target="blank"
            >
              <FacebookIcon className="FacebookIcon" />
            </a>
            <a
              href="https://www.instagram.com/gadgetscloud5/"
              target="blank"
            >
              <InstagramIcon className="InstagramIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
