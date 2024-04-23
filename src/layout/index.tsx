import { useMemo } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Container from "@/ui/Container";

import useHeightNavigation from "@/hooks/useHeightNavigation";

const Layout = () => {
  const { ref, height } = useHeightNavigation();
  const style = useMemo(
    () => (height ? { paddingBottom: `${height! + 20}px` } : null),
    [height]
  );

  return (
    <>
      <Header />
      <main style={style!}>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Navigation ref={ref} />
    </>
  );
};

export default Layout;
