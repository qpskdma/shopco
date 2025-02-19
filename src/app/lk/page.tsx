import styles from "./lk.module.scss";

const page: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
        <p>Profile</p>
        <p>First name</p>
        <div className="default-input__wrapper">
          <input className="default-input" type="text" placeholder="" />
        </div>
      </section>
    </div>
  );
};

export default page;
