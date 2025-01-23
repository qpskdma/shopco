import Rating from "./Rating";
import styles from "./Reviews.module.scss";

const Review: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Rating rating={3.5} />
      <p className={styles.author}>Sarah M.</p>
      <p className={styles.review__text}>
        I am blown away by the quality and style of the clothes I received from
        Shop.co. From casual wear to elegant dresses, every piece I have bought
        has exceeded my expectations.
      </p>
    </div>
  );
};

export default Review;
