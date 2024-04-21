import { IProduct } from "@/types";
import styles from "./index.module.scss";
import Heart from "@/icons/Heart";
import { HTMLAttributes } from "react";

interface Props
  extends HTMLAttributes<HTMLButtonElement>,
    Pick<IProduct, "isLike"> {}

const ButtonLike = ({ isLike, ...props }: Props) => {
  return (
    <button className={styles.root} {...props}>
      <Heart isActive={isLike} activeColor="#5F2BFC" />
    </button>
  );
};

export default ButtonLike;
