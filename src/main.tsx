import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";

import "@/styles/index.css";

import { ROUTES } from "@/routes";

import Categories from "@/pages/categories.tsx";
import Category from "@/pages/category.tsx";
import Home from "@/pages/home.tsx";
import NotFound from "@/pages/not-found";

import Layout from "@/layout";
import LayoutCategory from "@/layout/Category";

import { store } from "@/lib/store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.HOME} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={ROUTES.CATEGORIES} element={<LayoutCategory />}>
        <Route index element={<Categories />} />
        <Route path={ROUTES.CATEGORY} element={<Category />} />
      </Route>
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      <Route path={"*"} element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
