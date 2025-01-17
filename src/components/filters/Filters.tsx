import Link from "next/link";
import styles from "./Filters.module.scss";

interface FiltersProps {}

const Filters: React.FC<FiltersProps> = ({}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h2>Filters</h2>
          <img src="/icons/settings.svg" alt="settings" />
        </div>
        <div className={`horizontal-line ${styles.horizontalLine}`}></div>
        <nav>
          <Link href="#">
            T-shirts
            <img src="arrow-right.svg" alt="" />
          </Link>
          <Link href="#">
            T-shirts
            <img src="arrow-right.svg" alt="" />
          </Link>
          <Link href="#">
            T-shirts
            <img src="arrow-right.svg" alt="" />
          </Link>
          <Link href="#">
            T-shirts
            <img src="arrow-right.svg" alt="" />
          </Link>
          <Link href="#">
            T-shirts
            <img src="arrow-right.svg" alt="" />
          </Link>
        </nav>
      </div>
      <div className={styles.popa}></div>
    </>
  );
};

export default Filters;
