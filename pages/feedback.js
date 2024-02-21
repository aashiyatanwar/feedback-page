import FeedbackForm from "../components/FeedbackForm";
import styles from "../styles/FeedbackPage.module.css";

const FeedbackPage = () => {
  const handleSubmitFeedback = (feedbackData) => {
    console.log("Feedback submitted:", feedbackData);
  };

  return (
    <div className={styles.container}>
      <h1>Feedback Page</h1>
      <FeedbackForm onSubmit={handleSubmitFeedback} />
    </div>
  );
};

export default FeedbackPage;
