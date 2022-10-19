import React, { lazy } from "react";

const HomePage = lazy(() => import("pages/HomePage"));

export enum AppRoutes {
  Home = "Home",
  NotFound = "NotFound",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Home]: "/",
  [AppRoutes.NotFound]: "*",
};

export interface IRoute {
  path: string;
  Component: React.LazyExoticComponent<() => JSX.Element>;
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
