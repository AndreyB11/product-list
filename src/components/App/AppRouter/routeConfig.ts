import { lazy, LazyExoticComponent } from "react";
import { AppRoutes, RoutePath } from "shared/constants";

const HomePage = lazy(() => import("pages/HomePage"));

export interface IRoute {
  path: string;
  Component: LazyExoticComponent<() => JSX.Element>;
}

export const RouteConfig: Record<AppRoutes, IRoute> = {
  [AppRoutes.Home]: {
    path: RoutePath.Home,
    Component: HomePage,
  },
  [AppRoutes.NotFound]: {
    path: RoutePath.NotFound,
    Component: HomePage,
  },
};
