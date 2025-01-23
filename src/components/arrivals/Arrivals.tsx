"use client";
import { Product } from "@/services/types";
import styles from "./Arrivals.module.scss";
import { useEffect, useState } from "react";
import { getProducts } from "@/services/firebase";
import ProductItem from "../productItem/ProductItem";
import Link from "next/link";

const Arrivals: React.FC = ({}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [offset, setOffset] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollRight = () => {
    if (currentIndex < products.length - 1) {
      setOffset((prevOffset) => prevOffset - (20.5 / 100) * window.innerWidth);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setOffset(0);
      setCurrentIndex(0);
    }
  };

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setOffset((prevOffset) => prevOffset + (20.5 / 100) * window.innerWidth);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setOffset(-(20.5 / 100) * window.innerWidth * (products.length - 1));
      setCurrentIndex(products.length - 1);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const productsList: Product[] = await getProducts();
      setProducts(productsList);
      console.log(productsList);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setOffset(-(20.5 / 100) * window.innerWidth * currentIndex);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOffset(-(20.5 / 100) * window.innerWidth * currentIndex);
    }
  }, [currentIndex]);

  return (
    <>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>NEW ARRIVALS</h3>
        {products.length > 0 ? (
          <>
            <button className={styles.btnLeft} onClick={scrollLeft}>
              ❮
            </button>
            <button className={styles.btnRight} onClick={scrollRight}>
              ❯
            </button>
          </>
        ) : null}
        <div
          className={styles.products__wrapper}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {products.length > 0 ? (
            [...products, ...products, ...products].map(
              (item: Product, index: number) => {
                return (
                  <div className={styles.item} key={index}>
                    <ProductItem item={item} isLoading={false} />
                  </div>
                );
              }
            )
          ) : (
            <div className={styles.item}>
              <ProductItem isLoading={true} />
            </div>
          )}
        </div>
        <Link href="/shop?category=newArrivals">
          <button className={`light-button ${styles.btn}`}>View All</button>
        </Link>
      </div>
      <div className="horizontal-line"></div>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>top selling</h3>
      </div>
    </>
  );
};

export default Arrivals;
