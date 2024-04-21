import { IProduct } from "@/types";
import styles from "./index.module.scss";

import Top from "./Top";
import Products from "@/components/Products";

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
  {
    id: 2,
    name: "Nike Air Force 1",
    price: 12,
    price_delivery: 0,
    image: "/images/product/product-3.png",
    isLike: false,
  },
  {
    id: 3,
    name: "AirPods Pro 2nd Gen",
    price: 12,
    price_delivery: 0,
    image: "/images/product/product-4.png",
    isLike: false,
  },
  {
    id: 4,
    name: "PEPE Plush Toy",
    price: 2.8,
    price_delivery: 5,
    image: "/images/product/product-5.png",
    isLike: false,
  },
];

const Home = () => {
  return (
    <>
      <Top />
      <div style={{ marginTop: "30px" }}>
        <h3 className={styles.title}>
          New from <span>MAGAZ</span>
        </h3>
        <Products list={products} />
      </div>
    </>
  );
};

export default Home;
