"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getNewArrivalProducts, getOnSaleProducts } from "@/services/firebase";
import { Product } from "@/services/types";
import ProductItem from "@/components/productItem/ProductItem";
import styles from "./page.module.scss";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    const fetchProducts = async () => {
      let productsList: Product[] = [];
      if (category === "onSale") {
        productsList = await getOnSaleProducts();
      } else if (category === "newArrivals") {
        productsList = await getNewArrivalProducts();
      }
      setProducts(productsList);
    };

    if (category) {
      fetchProducts();
    }
  }, [category]);

  return (
    <div className={styles.container}>
      <h1>{category === "onSale" ? "On Sale" : "New Arrivals"}</h1>
      <div className={styles.productsWrapper}>
        {products.length > 0 ? (
          products.map((item: Product, index: number) => {
            return (
              <div className={styles.item} key={index}>
                <ProductItem item={item} isLoading={false} />
              </div>
            );
          })
        ) : (
          <div className={`${styles.item} ${styles.overflow}`}>
            <ProductItem isLoading={true} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
