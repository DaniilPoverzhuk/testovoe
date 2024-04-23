import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";

import styles from "./index.module.scss";

import { getAll as getAllProducts } from "@/lib/slices/products";

import Top from "./Top";
import Products from "@/components/Products";
import Loader from "@/components/Loader";
import Error from "@/components/Error";

const Home = () => {
  const dispatch = useAppDispatch();
  const {
    error,
    data: products,
    status,
  } = useAppSelector((store) => store.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "error") {
    return <Error message={error?.message!} />;
  }
  return (
    <>
      <Top />
      <div style={{ marginTop: "30px" }}>
        <h3 className={styles.title}>
          New from <span>MAGAZ</span>
        </h3>
        <Products list={products} />
      </div>
    </>
  );
};

export default Home;
