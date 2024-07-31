import React from 'react';
import data from "./data";
import Card from "./Card";
import styles from './Cards.module.css';

const Cards = () => {
  return (
    <div className={styles.wrapper}>
      {data.map((item) => (
        <Card
          
          title={item.title}
          img={item.img}
          price={item.price}
          description={item.description}
          key={item.title}
        />
      ))}
    </div>
  );
};

export default Cards;
