import styles from "./index.module.scss";

import { IProduct } from "@/types";

import Info from "./Info";
import Image from "./Image";

const Product = ({ image, isLike, ...props }: IProduct) => {
  return (
    <li className={styles.root}>
      <Image image={image} isLike={isLike} />
      <Info {...props} />
    </li>
  );
};

export default Product;
