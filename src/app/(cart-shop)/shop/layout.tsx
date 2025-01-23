"use client";
import Filters from "@/components/filters/Filters";
import styles from "./page.module.scss";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const crumbs = [
    { label: "Home", href: "/" },
    {
      label: category === "onSale" ? "On Sale" : "New Arrivals",
      href: `/products?category=${category}`,
    },
  ];
  return (
    <div className={styles.mainWrapper}>
      <nav aria-label="breadcrumb">
        <ol className={styles.breadcrumb}>
          {crumbs.map((crumb, index) => (
            <li
              key={index}
              className={`${styles.breadcrumbItem} ${
                index === crumbs.length - 1 ? "active" : ""
              }`}
            >
              {index === crumbs.length - 1 ? (
                crumb.label
              ) : (
                <Link href={crumb.href}>{crumb.label}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <div className={styles.wrapper}>
        <Filters />
        {children}
      </div>
    </div>
  );
}
