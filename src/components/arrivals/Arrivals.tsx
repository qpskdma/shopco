"use client";

import { Product } from "@/services/types";
import styles from "./Arrivals.module.scss";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import { getProducts } from "@/services/firebase";

const Arrivals: React.FC = ({}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isArrivalsVisible, setIsArrivalsVisible] = useState(false);
  const [isTopVisible, setIsTopVisible] = useState(false);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const productsList: Product[] = await getProducts();
  //     setProducts(productsList);
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>NEW ARRIVALS</h3>
        <div className={styles.products__wrapper}>
          {products.length > 0 ? (
            products.map((item: Product, index: number) => {
              return (
                <div className={isArrivalsVisible ? styles.visible : ""}>
                  <ProductItem item={item} key={index} />
                </div>
              );
            })
          ) : (
            <ProductItem />
          )}
        </div>
        <button
          className={`light-button ${styles.btn}`}
          onClick={() => setIsArrivalsVisible(!isArrivalsVisible)}
        >
          View All
        </button>
        <div className={styles.horizontal__line}></div>
      </div>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>top selling</h3>
      </div>
    </>
  );
};

export default Arrivals;
