import Heart from "@/icons/Heart";
import styles from "./index.module.scss";
import { ROUTES } from "@/routes";
import { Link, useLocation, useParams } from "react-router-dom";
import { forwardRef, useEffect, useMemo } from "react";

type TypeNavName = "Home" | "Categories" | "Orders" | "Profile";

interface INavigate {
  id: number;
  Img: typeof Heart;
  path: ROUTES;
  name: TypeNavName;
}

const list: INavigate[] = [
  {
    id: 0,
    Img: Heart,
    path: ROUTES.HOME,
    name: "Home",
  },
  {
    id: 1,
    Img: Heart,
    path: ROUTES.CATEGORIES,
    name: "Categories",
  },
  {
    id: 2,
    Img: Heart,
    path: ROUTES.ORDERS,
    name: "Orders",
  },
  {
    id: 3,
    Img: Heart,
    path: ROUTES.PROFILE,
    name: "Profile",
  },
];

const Navigate = forwardRef<HTMLDivElement>((_, ref) => {
  const { pathname } = useLocation();

  const isCurrentPath = (path: ROUTES) => {
    return pathname.split("/").at(1) === path.slice(1);
  };

  return (
    <div ref={ref} className={styles.root}>
      <nav>
        <ul className={styles.list}>
          {list.map(({ Img, id, name, path }) => (
            <li key={id}>
              <Link to={path}>
                <Img
                  isActive={isCurrentPath(path)}
                  activeColor="rgb(95, 43, 252)"
                  defaultColor="#171717"
                />
                <p
                  style={{
                    color: isCurrentPath(path)
                      ? "rgb(95, 43, 252)"
                      : "rgb(119, 121, 125)",
                  }}
                >
                  {name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
});

export default Navigate;
