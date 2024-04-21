import BreadCrumbs from "@/components/BreadCrumbs";
import { Outlet } from "react-router-dom";

const LayoutCategory = () => {
  return (
    <>
      <BreadCrumbs />
      <div style={{ marginTop: "30px" }}>
        <Outlet />
      </div>
    </>
  );
};

export default LayoutCategory;
