import React, { Suspense } from "react";
import { Routes } from "react-router";
import { Route } from "react-router-dom";
import { RouteConfig } from "shared/config/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(RouteConfig).map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
