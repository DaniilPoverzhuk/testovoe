import { Outlet } from "react-router-dom";

import Navigation from "@/components/Navigation";
import Container from "@/ui/Container";
import Header from "@/components/Header";

const Layout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header />
      <Container style={{ flexGrow: 1 }}>
        <Outlet />
      </Container>
      <Navigation />
    </div>
  );
};

export default Layout;
