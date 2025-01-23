import { Product } from "@/services/types";
import styles from "./ProductItem.module.scss";
import Rating from "../reviews/Rating";

interface ProductItemProps {
  item?: Product;
  isLoading: boolean;
}

const ProductItem: React.FC<ProductItemProps> = ({ item, isLoading }) => {
  if (isLoading) {
    return (
      <div className={styles.skeleton}>
        <div className={styles.image__placeholder}></div>
        <div className={styles.image__placeholder}></div>
        <div className={styles.image__placeholder}></div>
        <div className={styles.image__placeholder}></div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.image__wrapper}>
        <img src={`/images/${item?.image}`} alt="" />
      </div>
      <h2 className={styles.title}>{item?.name}</h2>
      <div className={styles.rating}>
        {item?.rating ? <Rating rating={item.rating} /> : null}
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
