export enum AppRoutes {
  Home = "Home",
  NotFound = "NotFound",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Home]: "/",
  [AppRoutes.NotFound]: "*",
};
