import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./index.module.scss";

import { ROUTES } from "@/routes";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHomePage = useMemo(
    () => (pathname as ROUTES) === ROUTES.HOME,
    [pathname]
  );
  const buttonText = useMemo(
    () => (isHomePage ? "Cancel" : "Back"),
    [isHomePage]
  );

  const onClickHandler = () => {
    if (isHomePage) return;

    navigate(-1);
  };

  return (
    <header className={styles.root}>
      <button className={styles.button} onClick={onClickHandler}>
        {buttonText}
      </button>
      <div className={styles.title}>
        <h2 className={styles.sup}>magaz</h2>
        <h4 className={styles.sub}>bot</h4>
      </div>
    </header>
  );
};

export default Header;
