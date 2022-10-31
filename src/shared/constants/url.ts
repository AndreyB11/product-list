export enum AppRoutes {
  Home = "Home",
  NotFound = "NotFound",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Home]: "/",
  [AppRoutes.NotFound]: "*",
};

export const API_URL = "http://localhost:3000";

export const getAPIUrls = (id?: string) => ({
  getAllProducts: `${API_URL}/products`,
  addProduct: `${API_URL}/products`,
  editProduct: `${API_URL}/products/${id}`,
  deleteProduct: `${API_URL}/products/${id}`,
});
