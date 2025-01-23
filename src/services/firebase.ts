import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Product } from "./types";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getProducts = async (): Promise<Product[]> => {
  try {
    const productsCollection = collection(db, "products");
    const productsSnapshot = await getDocs(productsCollection);
    const productsList: Product[] = [];

    productsSnapshot.forEach((doc) => {
      const data = doc.data();
      if (data) {
        productsList.push({
          id: data.id,
          name: data.name,
          category: data.category,
          colors: data.colors,
          sizes: data.sizes,
          rating: data.rating,
          price: data.price,
          image: data.image,
          newArrival: data.newArrival,
          topSelling: data.topSelling,
          sale: data.sale,
          oldPrice: data.oldPrice,
        } as Product);
      }
    });

    return productsList;
  } catch (error) {
    console.error("Error getting documents:", error);
    return [];
  }
};

export const getOnSaleProducts = async (): Promise<Product[]> => {
  try {
    const productsCollection = collection(db, "onSale");
    const productsSnapshot = await getDocs(productsCollection);
    const productsList: Product[] = [];

    productsSnapshot.forEach((doc) => {
      const data = doc.data();
      if (data) {
        productsList.push({
          id: data.id,
          name: data.name,
          category: data.category,
          colors: data.colors,
          sizes: data.sizes,
          rating: data.rating,
          price: data.price,
          image: data.image,
          newArrival: data.newArrival,
          topSelling: data.topSelling,
          sale: data.sale,
          oldPrice: data.oldPrice,
        } as Product);
      }
    });

    return productsList;
  } catch (error) {
    console.error("Error getting documents:", error);
    return [];
  }
};
export const getTopSellingProducts = async (): Promise<Product[]> => {
  try {
    const productsCollection = collection(db, "topSelling");
    const productsSnapshot = await getDocs(productsCollection);
    const productsList: Product[] = [];

    productsSnapshot.forEach((doc) => {
      const data = doc.data();
      if (data) {
        productsList.push({
          id: data.id,
          name: data.name,
          category: data.category,
          colors: data.colors,
          sizes: data.sizes,
          rating: data.rating,
          price: data.price,
          image: data.image,
          newArrival: data.newArrival,
          topSelling: data.topSelling,
          sale: data.sale,
          oldPrice: data.oldPrice,
        } as Product);
      }
    });

    return productsList;
  } catch (error) {
    console.error("Error getting documents:", error);
    return [];
  }
};

export const getNewArrivalProducts = async (): Promise<Product[]> => {
  try {
    const productsCollection = collection(db, "newArrival");
    const productsSnapshot = await getDocs(productsCollection);
    const productsList: Product[] = [];

    productsSnapshot.forEach((doc) => {
      const data = doc.data();
      if (data) {
        productsList.push({
          id: data.id,
          name: data.name,
          category: data.category,
          colors: data.colors,
          sizes: data.sizes,
          rating: data.rating,
          price: data.price,
          image: data.image,
          newArrival: data.newArrival,
          topSelling: data.topSelling,
          sale: data.sale,
          oldPrice: data.oldPrice,
        } as Product);
      }
    });

    return productsList;
  } catch (error) {
    console.error("Error getting documents:", error);
    return [];
  }
};

// // Функция для добавления отзыва
// export async function addReview(review: Object) {
//   try {
//     const docRef = await addDoc(collection(db, "reviews"), review);
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }
