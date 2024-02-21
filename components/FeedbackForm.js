import React, { useState } from "react";
import styles from "../styles/FeedbackForm.module.css";
import StarRating from "./StarRating";

const FeedbackForm = () => {
  const [safetyRating, setSafetyRating] = useState(0);
  const [cleanlinessRating, setCleanlinessRating] = useState(0);
  const [serviceRating, setServiceRating] = useState(0);
  const [recommendation, setRecommendation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      safetyRating === 0 ||
      cleanlinessRating === 0 ||
      serviceRating === 0 ||
      recommendation === ""
    ) {
      alert("Please provide ratings for all fields and recommendation!");
      return;
    }

    setSafetyRating(0);
    setCleanlinessRating(0);
    setServiceRating(0);
    setRecommendation("");

    alert("Thank you for your feedback!");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label>Safety Rating:</label>
          <div className={styles.starContainer}>
            <StarRating value={safetyRating} onChange={setSafetyRating} />
          </div>
        </div>
        <div className={styles.field}>
          <label>Cleanliness Rating:</label>
          <div className={styles.starContainer}>
            <StarRating
              value={cleanlinessRating}
              onChange={setCleanlinessRating}
            />
          </div>
        </div>
        <div className={styles.field}>
          <label>Service Rating:</label>
          <div className={styles.starContainer}>
            <StarRating value={serviceRating} onChange={setServiceRating} />
          </div>
        </div>
        <div className={styles.field}>
          <label>Would you recommend us?</label>
          <div className={styles.recommendationContainer}>
            <label>
              <input
                type="radio"
                value="Yes"
                checked={recommendation === "Yes"}
                onChange={(e) => setRecommendation(e.target.value)}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                checked={recommendation === "No"}
                onChange={(e) => setRecommendation(e.target.value)}
              />
              No
            </label>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button} type="submit">
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
