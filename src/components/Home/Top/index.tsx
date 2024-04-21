import styles from "./index.module.scss";
import Category from "./Category";

export interface ICategory {
  id: number;
  name: string;
  img: string;
}

const categories: ICategory[] = [
  {
    id: 0,
    name: "mackbooks",
    img: "/images/home/category-1.png",
  },
  {
    id: 1,
    name: "dropcoins",
    img: "/images/home/category-2.png",
  },
  {
    id: 2,
    name: "headphones",
    img: "/images/home/category-3.png",
  },
  {
    id: 3,
    name: "iphones",
    img: "/images/home/category-4.png",
  },
  {
    id: 4,
    name: "sneakers",
    img: "/images/home/category-5.png",
  },
];

const Top = () => {
  return (
    <>
      <div className={styles.banner}>
        <img src="/images/home/banner.png" alt="banner" />
      </div>
      <ul className={styles.list}>
        {categories.map((category) => (
          <Category key={category.id} {...category} />
        ))}
      </ul>
    </>
  );
};

export default Top;
