import Review from "./Review";
import styles from "./Reviews.module.scss";

const Reviews: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title__wrapper}>
        <h3 className={styles.customers__title}>OUR HAPPY CUSTOMERS</h3>
        <div className={styles.arrows}></div>
      </div>
      <Review />
    </div>
  );
};

export default Reviews;
