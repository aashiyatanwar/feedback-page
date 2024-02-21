import React from "react";
import styles from "../styles/StarRating.module.css";

const StarRating = ({ value, onChange }) => {
  const stars = [1, 2, 3, 4, 5];

  const handleClick = (newValue) => {
    onChange(newValue === value ? 0 : newValue);
  };

  return (
    <div className={styles["star-container"]}>
      {stars.map((star) => (
        <span
          key={star}
          className={`${styles.star} ${star <= value ? styles.active : ""}`}
          onClick={() => handleClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
