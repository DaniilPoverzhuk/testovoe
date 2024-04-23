export interface IProduct {
  _id: string;
  name: string;
  description: string;
  type: string;
  category: string;
  subCategory: string;
  price: number;
  currency: string;
  sold: number;
  deliverMin: number;
  deliverMax: number;
  specialQuote: string;
  properties: [{ weight: string }, { diameter: string }, { thikness: string }];
  images: string[];
  deliveryFee: number;
}

export interface Icon {
  isActive: boolean;
  defaultColor: string;
  activeColor?: string;
}
