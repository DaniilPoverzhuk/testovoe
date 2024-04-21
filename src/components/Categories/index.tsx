import { Link } from "react-router-dom";
import styles from "./index.module.scss";

type TypeCategoryName =
  | "Apple"
  | "Drops & Mining"
  | "Sneakers"
  | "Cold Wallets"
  | "Meme Toys"
  | "Other";

interface ICategory {
  id: number;
  img: string;
  name: TypeCategoryName;
  path: string;
}

const CATEGORIES: ICategory[] = [
  {
    id: 0,
    name: "Apple",
    img: "/images/categories/apple.png",
    path: "/categories/apple",
  },
  {
    id: 1,
    name: "Drops & Mining",
    img: "/images/categories/drops-mining.png",
    path: "/categories/drops-&-mining",
  },
  {
    id: 2,
    name: "Sneakers",
    img: "/images/categories/sneakers.png",
    path: "/categories/sneakers",
  },
  {
    id: 3,
    name: "Cold Wallets",
    img: "/images/categories/cold-wallets.png",
    path: "/categories/cold-wallets",
  },
  {
    id: 4,
    name: "Meme Toys",
    img: "/images/categories/meme-toys.png",
    path: "/categories/meme-toys",
  },
  {
    id: 5,
    name: "Other",
    img: "/images/categories/other.png",
    path: "/categories/other",
  },
];

const CategoriesComponent = () => {
  return (
    <ul className={styles.root}>
      {CATEGORIES.map(({ id, path, img, name }) => (
        <li key={id}>
          <Link to={path}>
            <div className={styles.img}>
              <img src={img} />
            </div>
            <p>{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesComponent;
