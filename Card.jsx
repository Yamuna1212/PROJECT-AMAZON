import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ title, img, price, description }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        <img src={img} alt={title} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.price}>Rs.{price}</div>
      <a href="/" className={styles.shopNow}>Shop Now</a>
    </div>
  );
};

export default Card;

