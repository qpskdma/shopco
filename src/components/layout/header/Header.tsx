import styles from "./Header.module.scss";
import Link from "next/link";

const Header: React.FC = ({}) => {
  return (
    <header className={styles.header}>
      <div className={styles.burger__menu}>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
      <h1 className={styles.logo}>SHOP.CO</h1>
      <ul className={styles.menu}>
        <li>
          <div className={styles.dropdown}>
            Shop <img src="/icons/arrow-down.svg" alt="" />
          </div>
        </li>
        <li>
          <Link href="#">On Sale</Link>
        </li>
        <li>
          <Link href="#">New Arrivals</Link>
        </li>
        <li>
          <Link href="#">Brands</Link>
        </li>
      </ul>
      <div className={styles.search}>
        <img src="/icons/loupe.svg" alt="loupe" />
        <input type="text" placeholder="Search for products..." />
      </div>
      <div className={styles.menu__icons}>
        <img className={styles.loupe} src="/icons/loupe.svg" alt="loupe" />
        <img height={"24"} src="/icons/cart.svg" alt="cart" />
        <img height={"24"} src="/icons/user.svg" alt="user" />
      </div>
    </header>
  );
};

export default Header;
