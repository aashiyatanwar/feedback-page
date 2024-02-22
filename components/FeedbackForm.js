import React, { useState } from "react";
import styles from "../styles/FeedbackForm.module.css";
import StarRating from "./StarRating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe , faTruck , faHeadset, faP} from '@fortawesome/free-solid-svg-icons';

const FeedbackForm = () => {
  const [websiteRating, setWebsiteRating] = useState(0);
  const [delieveryRating, setDelieveryRating] = useState(0);
  const [customerRating, setCustomerRating] = useState(0);
  const [productRating, setProductRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      websiteRating === 0 ||
      delieveryRating === 0 ||
      customerRating === 0 ||
      productRating === 0
    ) {
      alert("Please provide ratings for all fields and recommendation!");
      return;
    }

    setWebsiteRating(0);
    setDelieveryRating(0);
    setCustomerRating(0);
    setProductRating(0);

    
  };

  return (
    <div className={`${styles.container} ${styles.form}`} style = {{marginTop : -5}}>
      <form onSubmit={handleSubmit}>
        <div className={styles.field}>
          <div className={styles.label}>
          <FontAwesomeIcon icon={faGlobe}  style = {{paddingRight : 10, fontSize : 16}} />
            Website</div>
          <div className={styles.paragraph}>
            How safe do you feel with Ayuvya?
          </div>
          <div className={styles.starContainer}>
            <StarRating value={websiteRating} onChange={setWebsiteRating} />
          </div>
        </div>
        <hr></hr>
        <div className={styles.field}>
          <div className={styles.label}>
          <FontAwesomeIcon icon={faTruck} style={{paddingRight : 10, fontSize: '16px' }} />
            Delivery</div>
          <div className={styles.paragraph}>
            Are you happy with the delivery service?
          </div>
          <div className={styles.starContainer}>
            <StarRating
              value={delieveryRating}
              onChange={setDelieveryRating}
            />
          </div>
        </div>
        <hr></hr>
        <div className={styles.field}>
          <div className={styles.label}>
          <FontAwesomeIcon icon={faHeadset} style={{ paddingRight : 10, fontSize: '16px' }} />
            Customer Support</div>
          <div className={styles.paragraph}>
            How easy was it to communicate with your customer service?
          </div>
          <div className={styles.starContainer}>
            <StarRating value={customerRating} onChange={setCustomerRating} />
          </div>
        </div>
        <hr></hr>
        <div className={styles.field}>
          <div className={styles.label}>
          <FontAwesomeIcon icon={faP} style={{ fontSize: '16px', paddingRight : 10 }} />
            Product</div>
          <div className={styles.paragraph}>Are you happy with the product?</div>
          <div className={styles.starContainer}>
            <StarRating value={productRating} onChange={setProductRating} />
          </div>
        </div>
          <hr></hr>
        <div className={styles.buttonContainer} style = {{marginTop : 20}}>
          <button className={styles.button} type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
