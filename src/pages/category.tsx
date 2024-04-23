import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { useAppSelector } from "@/lib/hooks";

import Error from "@/components/Error";
import Products from "@/components/Products";

import getStrWithRemovedExtraChar from "@/utils/getStrWithRemovedExtraChar";

import { IProduct } from "@/types";

const Category = () => {
  const { id: category } = useParams();
  const { data: products } = useAppSelector((store) => store.products);
  const filteredProducts = useMemo<IProduct[] | null>(() => {
    if (!category) return null;

    const convertedCategory = getStrWithRemovedExtraChar(category, "-");
    return products.filter(
      (product) => product.category.toLowerCase() === convertedCategory
    );
  }, [products]);

  if (!filteredProducts) {
    return <Error message="Нет товара :(" />;
  }

  return <Products list={filteredProducts} />;
};

export default Category;
