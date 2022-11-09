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
    getAll: "/products",
    add: "/products",
    edit: `/products/${id}`,
    delete: `/products/${id}`,
  },
});
