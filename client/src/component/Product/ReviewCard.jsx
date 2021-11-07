import { Rating } from "@material-ui/lab";
import React from "react";
import profilePng from "../../images/Profile.png";
import styles from './ProductDetails.module.css'



const ReviewCard = ({ review }) => {
    const options = {
        value: review.rating,
        readOnly: true,
        precision: 0.5,
    };
    return (
        <div className={styles.reviewCard}>
            <img src={profilePng} alt="User" />
            <p>{review.name}</p>
            <Rating {...options} />
            <span className={styles.reviewCardComment}>{review.comment}</span>
        </div>
    );
};

export default ReviewCard;
