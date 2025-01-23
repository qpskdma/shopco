"use client";
import styles from "./Header.module.scss";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Header: React.FC = ({}) => {
  const [theme, setTheme] = useState("light");

  // const [isVisible, setIsVisible] = useState(true);
  // const prevScrollPos = useRef(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos =
  //       document.documentElement.scrollTop || document.body.scrollTop;
  //     const visible = prevScrollPos.current > currentScrollPos;

  //     setIsVisible(visible);
  //     prevScrollPos.current = currentScrollPos;
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <header className={styles.header}>
      {/* <header
      className={`${styles.header} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    > */}
      <div className={styles.burger__menu}>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
      <Link href="/">
        <h1 className="logo">SHOP.CO</h1>
      </Link>

      <ul className={styles.menu}>
        <li>
          <Link href="/shop">
            <div className="link">Shop</div>
          </Link>
        </li>
        <li>
          <Link className="link" href="/shop?category=onSale">
            On Sale
          </Link>
        </li>
        <li>
          <Link className="link" href="/shop?category=newArrivals">
            New Arrivals
          </Link>
        </li>
        <li>
          <Link className="link" href="#">
            Brands
          </Link>
        </li>
      </ul>
      <div className={`custom-input__wrapper ${styles.search}`}>
        <img width={23} src="/icons/loupe.svg" alt="loupe" />
        <input
          className="custom-input"
          type="text"
          placeholder="Search for products..."
        />
      </div>
      <div className={`icon ${styles.menu__icons}`}>
        <img className={styles.loupe} src="/icons/loupe.svg" alt="loupe" />
        <Link href={"/"}>
          {/* <Link href={"/cart"}> */}
          <img height={"24"} src="/icons/cart.svg" alt="cart" />
        </Link>
        <Link href={"/"}>
          {/* <Link href={"/lk"}> */}
          <img height={"24"} src="/icons/user.svg" alt="user" />
        </Link>
        <img height={"24"} src="/icons/moon.svg" alt="" />
        {/* <img height={"24"} src="/icons/moon.svg" alt="" onClick={toggleTheme} /> */}
      </div>
    </header>
  );
};

export default Header;
