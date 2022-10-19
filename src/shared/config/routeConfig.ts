import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  Home = "main",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Home]: "/",
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Home]: {
    path: RoutePath.main,
  },
};
