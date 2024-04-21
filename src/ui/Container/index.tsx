import styles from "./index.module.scss";
import type { HTMLAttributes, PropsWithChildren } from "react";

interface Props extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {}

const Container = ({ children, ...props }: Props) => {
  return (
    <div {...props} className={styles.root}>
      {children}
    </div>
  );
};

export default Container;
