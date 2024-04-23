import styles from "./index.module.scss";

import Product from "./Product";
import { IProduct } from "@/types";

const Products = ({ list }: { list: IProduct[] }) => {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <Product key={item._id} {...item} />
      ))}
    </ul>
  );
};

export default Products;
