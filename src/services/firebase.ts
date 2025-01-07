import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Product } from "./types";

const firebaseConfig = {
  apiKey: "AIzaSyCzTeWSP4k9J3sHc2QnlIsqy56v7mSdnUQ",
  authDomain: "shopco-5f8c5.firebaseapp.com",
  projectId: "shopco-5f8c5",
  storageBucket: "shopco-5f8c5.firebasestorage.app",
  messagingSenderId: "698871951523",
  appId: "1:698871951523:web:3b19111e8414b4fcd54f16",
  measurementId: "G-BBJ6JPC86D",
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

// export async function addProduct(product: Product) {
//   try {
//     const docRef = await addDoc(collection(db, "products"), product);
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }

// // Функция для добавления отзыва
// export async function addReview(review: Object) {
//   try {
//     const docRef = await addDoc(collection(db, "reviews"), review);
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }
