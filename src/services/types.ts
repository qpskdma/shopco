export interface Product {
  id: number;
  name: string;
  category: string;
  colors: string[];
  sizes: string[];
  rating: number;
  price: number;
  image: string;
  newArrival: boolean;
  topSelling: boolean;
  sale?: number;
  oldPrice?: number;
}
