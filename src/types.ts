import { Product } from "./data/products";

export interface CartItem extends Product {
  quantity: number;
}

export type SortOption = "default" | "price-asc" | "price-desc" | "rating" | "name";

export interface User {
  id: number;
  email: string;
  name: string;
  phone?: string;
}

export interface OrderFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  comment?: string;
}
