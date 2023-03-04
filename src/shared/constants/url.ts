export enum AppRoutes {
  Home = "Home",
  Any = "Any",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Home]: "/",
  [AppRoutes.Any]: "*",
};

export const getAPIUrls = (id?: string) => ({
  product: {
    getAll: "/items",
    add: "/items",
    edit: `/items/${id}`,
    delete: `/items/${id}`,
  },
});
