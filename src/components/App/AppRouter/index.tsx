import { Header } from "components/Layout/Header";
import { PageLayout } from "components/Layout/PageLayout";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RouteConfig } from "./routeConfig";

const AppRouter = () => (
  <Suspense fallback={<PageLayout header={<Header />} />}>
    <Routes>
      {Object.values(RouteConfig).map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
