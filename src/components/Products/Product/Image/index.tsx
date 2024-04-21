import styles from "./index.module.scss";

import { IProduct } from "@/types";

import ButtonLike from "./ButtonLike";
import { useState } from "react";

const dots = Array(7).fill(null);

const Image = ({ image, isLike }: Pick<IProduct, "image" | "isLike">) => {
  const [like, setLike] = useState<boolean>(isLike);

  const toggleLike = () => {
    setLike((prev) => !prev);
  };

  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <img src={image} alt="product" />
        <ButtonLike isLike={like} onClick={toggleLike} />
      </div>
      <ul className={styles.list_dots}>
        {dots.map((_, idx) => (
          <li key={idx} />
        ))}
      </ul>
    </div>
  );
};

export default Image;
