import styles from "./Cart.module.scss";

const Cart: React.FC = ({}) => {
  return (
    <>
      <h3 className={styles.title}>NEW ARRIVALS</h3>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.items}></div>
        </div>
        <div className={styles.wrapper}>
          <p>Order Summary</p>
          <div>
            <div>Subtotal</div>
            <div>$565</div>
          </div>
          <div>
            <div>Discount (-20%)</div>
            <div>-$113</div>
          </div>
          <div>
            <div>Delivery Fee</div>
            <div>$15</div>
          </div>
          <div className={`horizontal-line ${styles.horizontalLine}`}></div>
          <div>
            <div>Total</div>
            <div>$467</div>
          </div>
          <div className={`custom-input__wrapper ${styles.search}`}>
            <img width={23} src="/icons/loupe.svg" alt="loupe" />
            <input
              className="custom-input"
              type="text"
              placeholder="Add promo code"
            />
            <button className="dark-button">Apply</button>
          </div>
          <button className="dark-button">Go to Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
