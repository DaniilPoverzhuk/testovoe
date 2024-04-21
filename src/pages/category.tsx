import Products from "@/components/Products";
import { IProduct } from "@/types";

const products: IProduct[] = [
  {
    id: 0,
    name: "iPhone 15 Pro Max | 256",
    price: 250,
    price_delivery: 0,
    image: "/images/product/product-1.png",
    isLike: true,
  },
  {
    id: 1,
    name: "TON Drop Coin",
    price: 5,
    price_delivery: 5,
    image: "/images/product/product-2.png",
    isLike: false,
  },
];

const Category = () => {
  return <Products list={products} />;
};

export default Category;
