import { notFound } from "next/navigation";
// import styles from "./ProductPage.module.scss";
import { getTopSellingProducts } from "@/services/firebase";
import { Product } from "@/services/types";

export async function generateStaticParams() {
  let products: Product[] = [];
  products = await getTopSellingProducts();

  return products.map((product: { id: number }) => ({
    id: String(product.id),
  }));
}

export default async function ProductPage({}: {
  params: Promise<{ id: string }>;
}) {
  const res = await getTopSellingProducts();

  if (!res) return notFound(); // 404 если товара нет

  const product = await res[1];

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
    </div>
  );
}
