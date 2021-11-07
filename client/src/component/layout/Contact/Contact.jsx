import React from "react";
import "./Contact.css";
import { Typography, } from "@material-ui/core";

import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <Typography component="h1">CONTACT US</Typography>

      <p className="desc" >There are so many doubts and so much confusion when you are buying a new device especially like this one. <br /> <br />
        Let us know how can we help you whether there are doubts before purchase or after, we got your back! <br /> <br />
        Contact Us!
      </p>
      <a className="mailBtn" href="mailto:shoppingpoint269@gmail.com">
        <Button>Contact: shoppingpoint269@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
