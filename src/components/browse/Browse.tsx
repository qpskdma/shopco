import styles from "./Browse.module.scss";

const Browse: React.FC = ({}) => {
  return (
    <div className={styles.wrapper}>
      <h3>BROWSE BY dress STYLE</h3>
      <div className={styles.dress__styles}>
        <div>
          <img src="images/casual-style.png" alt="" />
          <p>Casual</p>
        </div>
        <div>
          <img src="images/formal-style.png" alt="" />
          <p>Formal</p>
        </div>
        <div>
          <img src="images/party-style.png" alt="" />
          <p>Party</p>
        </div>
        <div>
          <img src="images/gym-style.png" alt="" />
          <p>Gym</p>
        </div>
      </div>
    </div>
  );
};

export default Browse;
