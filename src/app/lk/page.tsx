import styles from "./lk.module.scss";

const page: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
        <p className={styles.profile__title}>Profile</p>
        <div className={styles.avatar__wrapper}>
          <img src="images/default-avatar.jpg" alt="User avatar" />
        </div>
        <p className={styles.label}>First name</p>
        <div className="default-input__wrapper">
          <input
            className={`default-input ${styles.input}`}
            type="text"
            placeholder="Username"
          />
        </div>
        <p className={styles.label}>Email</p>
        <div className="default-input__wrapper">
          <input
            className={`default-input ${styles.input}`}
            type="email"
            placeholder="Email"
          />
        </div>
      </section>
      <section className={styles.wrapper__second}>
        <div className={styles.box}>
          <h2 className={`${styles.heading} ${styles.favorites}`}>Favorites</h2>
          <p>1 product</p>
        </div>
        <div className={styles.box}>
          <h2 className={`${styles.heading} ${styles.purch}`}>Shopping list</h2>
          <p>Look</p>
        </div>
        <div className={styles.box}>
          <h2 className={`${styles.heading} ${styles.feedback}`}>
            Waiting for feedback
          </h2>
          <p>1 product</p>
        </div>
      </section>
    </div>
  );
};

export default page;
