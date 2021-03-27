import { lazy } from "react";

export const routes = {
  dashboard: {
    path: "/",
    component: lazy(() => import("../pages/Home/Home.page")),
    exact: true,
  },
};

export const renderRoutes = Object.entries(routes);
