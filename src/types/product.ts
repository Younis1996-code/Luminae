export type Product = {
  id: number;
  title: string;
  brand: string;
  description?: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  image: string;
  tags?: string[]; 

  // filtering-related
  category: string; 
  subCategory: string; 
  itemType: string; 
  style?: string[]; 
  color?: string[]; 
  size?: string[]; 
  material?: string; 
  isFavorite?: boolean;
  isTrending?: boolean;
  isTop?: boolean;
  isFlashSale?: boolean;
  discountEndTime?: string; 
};
