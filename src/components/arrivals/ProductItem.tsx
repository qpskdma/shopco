import { Product } from "@/services/types";
import styles from "./ProductItem.module.scss";

interface ProductItemProps {
  item?: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  return (
    <>
      <div className={styles.image__wrapper}>
        <img
          height={"298"}
          src={`/images/${item?.image}`}
          alt="T-SHIRT WITH TAPE DETAILS"
        />
      </div>
      <h2 className={styles.title}>{item?.name}</h2>
      <div className={styles.rating}>
        <div className={styles.star__rating}></div>
        <div className={styles.number__rating}>{item?.rating}/5</div>
      </div>
      <div className={styles.price}>
        <span>${item?.price}</span>
        <span className={styles.old__price}>
          {item?.oldPrice ? (
            <>
              <span className={styles.old__price}>${item.oldPrice}</span>
              <span className={styles.sale}>-{item.sale}%</span>
            </>
          ) : null}
        </span>
      </div>
    </>
  );
};

export default ProductItem;
