import styles from "./Arrivals.module.scss";
import ProductItem from "./ProductItem";

const Arrivals: React.FC = ({}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>NEW ARRIVALS</h3>
        <ProductItem />
        <button>View All</button>
        <div className={styles.horizontal__line}></div>
      </div>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>top selling</h3>
      </div>
    </>
  );
};

export default Arrivals;
