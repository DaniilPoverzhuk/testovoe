import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./index.module.scss";

import { ROUTES } from "@/routes";

import getCapitalizeWord from "@/utils/getCapitalizeWord";
import isNegative from "@/utils/isNegative";
import getStrWithRemovedExtraChar from "@/utils/getStrWithRemovedExtraChar";

const DEFAULT_BREAD_CRUMBS = ["Categories"];

const CATEGORIES = [
  "categories",
  "apple",
  "drops & minings",
  "sneakers",
  "cold wallets",
  "meme toys",
  "other",
];

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const listBreadCrumbs = useMemo(() => {
    const category = getCurrentCategory();

    if (category === ROUTES.CATEGORIES.slice(1)) {
      return DEFAULT_BREAD_CRUMBS;
    }

    return category
      ? [...DEFAULT_BREAD_CRUMBS, getCapitalizeWord(category)]
      : DEFAULT_BREAD_CRUMBS;
  }, [pathname]);

  function getCurrentCategory() {
    const category = pathname.split("/").at(-1)!;
    const idx = CATEGORIES.indexOf(getStrWithRemovedExtraChar(category, "-")!);
    const word = CATEGORIES.at(isNegative(idx) ? CATEGORIES.length + 1 : idx);

    return word;
  }

  useEffect(() => {
    if (!getCurrentCategory()) {
      navigate(ROUTES.NOT_FOUND);
    }
  }, [pathname]);

  return (
    <ul className={styles.root}>
      {listBreadCrumbs.map((breadCrumbs) => (
        <li key={breadCrumbs}>{breadCrumbs}</li>
      ))}
    </ul>
  );
};

export default BreadCrumbs;
