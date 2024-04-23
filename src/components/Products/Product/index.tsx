import styles from "./index.module.scss";

import { IProduct } from "@/types";

import Info from "./Info";
import Image from "./Image";

const Product = ({ images, ...props }: IProduct) => {
  return (
    <li className={styles.root}>
      <Image img={images[0]} />
      <Info {...props} />
    </li>
  );
};

export default Product;
