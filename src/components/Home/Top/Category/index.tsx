import { ICategory } from "..";
import styles from "./index.module.scss";

const Category = ({ name, img }: ICategory) => {
  return (
    <li className={styles.root}>
      <div className={styles.img}>
        <img src={img} alt={`category-${name}`} />
      </div>
      <p>{name}</p>
    </li>
  );
};

export default Category;
