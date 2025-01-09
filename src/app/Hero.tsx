import styles from "./hero.module.scss";

const Hero: React.FC = ({}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.text__section}>
          <h3>FIND CLOTHES THAT MATCHES YOUR STYLE</h3>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="dark-button">Shop Now</button>
          <div className={styles.metrics__list}>
            <div className={styles.metrics__item}>
              <div className={styles.metrics__value}>200+</div>
              <p className={styles.metrics__key}>International Brands</p>
            </div>
            <div className={styles.metrics__item}>
              <div className={styles.metrics__value}>2,000+</div>
              <p className={styles.metrics__key}>High-Quality Products</p>
            </div>
            <div className={styles.metrics__item}>
              <div className={styles.metrics__value}>30,000+</div>
              <p className={styles.metrics__key}>Happy Customers</p>
            </div>
          </div>
        </div>
        <div className={styles.image__section}>
          {/* <img className={styles.background} src="/images/models.jpg" alt="" /> */}
          <img className={styles.first__star} src="/icons/star.svg" alt="" />
          <img className={styles.second__star} src="/icons/star.svg" alt="" />
        </div>
      </div>

      <div className={styles.partners}>
        <img height={"33"} src="/icons/versace.svg" alt="versace" />
        <img height={"38"} src="/icons/zara-logo.svg" alt="zara" />
        <img height={"36"} src="/icons/gucci-logo.svg" alt="gucci" />
        <img height={"32"} src="/icons/prada-logo.svg" alt="prada" />
        <img height={"33"} src="/icons/calvin-clein.svg" alt="calvin clein" />
      </div>
    </>
  );
};

export default Hero;
