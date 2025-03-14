export interface IProduct {
  name: string;
  price: string;
  offer: string;
  colors: { name: string; value: string }[]; // Updated to include color names
  sizes?: string[]; // Added sizes
  images: string[];
}
