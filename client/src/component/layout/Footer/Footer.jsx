import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h2>Follow Us</h2>
            <div className={styles.rightFooter}>
                <a
                    href="https://twitter.com/cloud_gadgets"
                    target="blank"
                >
                    <TwitterIcon fontSize="large" className="TwitterIcon" />
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=100074820930467"
                    target="blank"
                >
                    <FacebookIcon fontSize="large" className="FacebookIcon" />
                </a>
                <a
                    href="https://www.instagram.com/gadgetscloud5/"
                    target="blank"
                >
                    <InstagramIcon fontSize="large" className="InstagramIcon" />
                </a>
            </div>
            <p>Created By Vaibhav Raj | © 2021  All Rights Reserved </p>
        </footer>
    );
};

export default Footer;
