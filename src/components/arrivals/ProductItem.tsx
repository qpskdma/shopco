import styles from "./ProductItem.module.scss";

interface ProductItemProps {
  item?: Object;
}

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  return (
    <div>
      <div className={styles.image__wrapper}>
        <img src="/images/t-shirt.png" alt="T-SHIRT WITH TAPE DETAILS" />
        <h3>T-SHIRT WITH TAPE DETAILS</h3>
      </div>
    </div>
  );
};

export default ProductItem;
