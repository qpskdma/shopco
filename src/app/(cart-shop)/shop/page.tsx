"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  getBrands,
  getNewArrivalProducts,
  getOnSaleProducts,
  getProducts,
} from "@/services/firebase";
import { Product } from "@/services/types";
import styles from "./page.module.scss";
import Link from "next/link";
import ProductCard from "@/components/productcard/ProductCard";

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
      } else if (category === "Brands") {
        productsList = await getBrands();
      } else {
        productsList = await getProducts();
      }
      setProducts(productsList);
    };

    fetchProducts();
  }, [category]);

  return (
    <div className={styles.container}>
      <h1>{category ? category : "All"}</h1>
      <div className={styles.productsWrapper}>
        {products.length > 0 ? (
          products.map((item: Product, index: number) => {
            return (
              <div className={styles.item} key={index}>
                <Link href={`/product/${item.id}`}>
                  <ProductCard item={item} isLoading={false} />
                </Link>
              </div>
            );
          })
        ) : (
          <div className={`${styles.item} ${styles.overflow}`}>
            <ProductCard isLoading={true} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
