export interface IProduct {
  id: number;
  name: string;
  price: number;
  price_delivery: number;
  image: string;
  isLike: boolean;
}

export interface Icon {
  isActive: boolean;
  defaultColor: string;
  activeColor?: string;
}
