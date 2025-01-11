import styles from "./Reviews.module.scss";

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar: Boolean = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={i} className={styles.starFull}>
        &#9733;
      </span>
    );
  }

  if (hasHalfStar) {
    stars.push(
      <span key="half" className={styles.starHalf}>
        &#9734;
      </span>
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={`empty-${i}`} className={styles.starEmpty}>
        &#9734;
      </span>
    );
  }

  return <div className={styles.rating}>{stars}</div>;
};

export default Rating;
