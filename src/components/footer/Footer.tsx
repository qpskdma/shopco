import styles from "./Footer.module.scss";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactFormWrapper}>
        <h2 className={styles.title}>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
        <form className={styles.form} action="post">
          <div className={`custom-input__wrapper ${styles.input}`}>
            <img src="/icons/email.svg" alt="email" />
            <input
              className="custom-input"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
          <button className="light-button" type="submit">
            Subscribe to Newsletter
          </button>
        </form>
      </div>
      <div className={styles.info}>
        <div className={styles.mainInfo}>
          <div>
            <h1 className="logo">SHOP.CO</h1>
            <p className={styles.description}>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
          </div>
          <ul className={`icon ${styles.socials}`}>
            <li>
              <a className={styles.socialWrapper} href="#">
                <img
                  className="icon"
                  width={12}
                  src="/icons/logo-twitter.svg"
                  alt="twitter"
                />
              </a>
            </li>
            <li>
              <a className={styles.socialWrapper} href="#">
                <img
                  className="icon"
                  height={12}
                  src="/icons/logo-facebook.svg"
                  alt="twitter"
                />
              </a>
            </li>
            <li>
              <a className={styles.socialWrapper} href="#">
                <img
                  className="icon"
                  width={12}
                  src="/icons/logo-inst.svg"
                  alt="twitter"
                />
              </a>
            </li>
            <li>
              <a className={styles.socialWrapper} href="#">
                <img
                  className="icon"
                  width={12}
                  src="/icons/logo-github.svg"
                  alt="twitter"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <h2>Company</h2>
          <ul>
            <li>
              <a href="#" aria-label="Facebook">
                About
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter">
                Features
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                Works
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                Career
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <h2>Help</h2>
          <ul>
            <li>
              <a href="#" aria-label="Facebook">
                Customer Support
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter">
                Delivery Details
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <h2>FAQ</h2>
          <ul>
            <li>
              <a href="#" aria-label="Facebook">
                Account
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter">
                Manage Deliveries
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                Orders
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                Payments
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <h2>Resources</h2>
          <ul>
            <li>
              <a href="#" aria-label="Facebook">
                Free eBooks
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter">
                Development Tutorial
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                How to - Blog
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                Youtube Playlist
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={`horizontal-line ${styles.horizontalLine}`}></div>
        <p className={styles.bottomText}>
          Shop.co &copy; 2000-2025, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
