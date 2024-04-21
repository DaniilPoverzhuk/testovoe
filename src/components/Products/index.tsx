import styles from "./index.module.scss";

import Product from "./Product";
import { IProduct } from "@/types";

const Products = ({ list }: { list: IProduct[] }) => {
  return (
    <ul className={styles.list}>
      {list.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </ul>
  );
};

export default Products;
