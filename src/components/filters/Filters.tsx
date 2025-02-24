import Link from "next/link";
import styles from "./Filters.module.scss";

const Filters: React.FC = ({}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.flexRow}>
          <h2>Filters</h2>
          <img
            className={styles.settings}
            src="icons/settings.svg"
            alt="settings"
          />
        </div>
        <div className={`horizontal-line ${styles.horizontalLine}`}></div>
        <nav className={styles.filterNav}>
          <Link href="#" className={styles.flexRow}>
            T-shirts
            <img src="icons/arrow-right.svg" alt="" />
          </Link>
          <Link href="#" className={styles.flexRow}>
            Shorts <img src="icons/arrow-right.svg" alt="" />
          </Link>
          <Link href="#" className={styles.flexRow}>
            Shirts <img src="icons/arrow-right.svg" alt="" />
          </Link>
          <Link href="#" className={styles.flexRow}>
            Hoodie <img src="icons/arrow-right.svg" alt="" />
          </Link>
          <Link href="#" className={styles.flexRow}>
            Jeans <img src="icons/arrow-right.svg" alt="" />
          </Link>
        </nav>
        <div className={`horizontal-line ${styles.horizontalLine}`}></div>
        <div>
          <div className={`${styles.flexRow} ${styles.title}`}>
            <h2>Colors</h2>
          </div>
          <div className={styles.colors}>
            <button
              className={`${styles.colorBtn} ${styles.white} `}
              title="White"
            ></button>
            <button
              className={`${styles.colorBtn} ${styles.black} `}
              title="Black"
            ></button>
            <button
              className={`${styles.colorBtn} ${styles.green} `}
              title="Green"
            ></button>
            <button
              className={`${styles.colorBtn} ${styles.red} `}
              title="Red"
            ></button>
            <button
              className={`${styles.colorBtn} ${styles.yellow} `}
              title="Yellow"
            ></button>
            <button
              className={`${styles.colorBtn} ${styles.orange} `}
              title="Orange"
            ></button>
            <button
              className={`${styles.colorBtn} ${styles.blue} `}
              title="Blue"
            ></button>
            <button
              className={`${styles.colorBtn} ${styles.pink} `}
              title="Pink"
            ></button>
            <button
              className={`${styles.colorBtn} ${styles.purple} `}
              title="Purple"
            ></button>
          </div>
        </div>
        <div className={`horizontal-line ${styles.horizontalLine}`}></div>
        {/* <nav className={styles.filterNav}>
          <Link href="#" className={styles.flexRow}>
            T-shirts
            <img src="icons/arrow-right.svg" alt="" />
          </Link>
          <Link href="#" className={styles.flexRow}>
            T-shirts
            <img src="icons/arrow-right.svg" alt="" />
          </Link>
          <Link href="#" className={styles.flexRow}>
            T-shirts
            <img src="icons/arrow-right.svg" alt="" />
          </Link>
          <Link href="#" className={styles.flexRow}>
            T-shirts
            <img src="icons/arrow-right.svg" alt="" />
          </Link>
          <Link href="#" className={styles.flexRow}>
            T-shirts
            <img src="icons/arrow-right.svg" alt="" />
          </Link>
        </nav> */}
        <div>
          <div className={`${styles.flexRow} ${styles.title}`}>
            <h2>Size</h2>
            <img src="icons/arrow-right.svg" alt="" />
          </div>
          <div className={styles.sizes}>
            <button className={styles.sizeBtn}>XX-Small</button>
            <button className={styles.sizeBtn}>X-Small</button>
            <button className={styles.sizeBtn}>Small</button>
            <button className={styles.sizeBtn}>Medium</button>
            <button className={styles.sizeBtn}>X-Small</button>
          </div>
        </div>
        <button className="dark-button">Apply Filter</button>
      </div>
      <div className={styles.overlay}></div>
    </>
  );
};

export default Filters;
