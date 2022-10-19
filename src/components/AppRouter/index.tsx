import React from "react";
import { Routes } from "react-router";
import { Route } from "react-router-dom";
import { IRoute } from "src/common/interfaces";

const AppRouter = () => {
  const mapRoutes = ({ path, Component }: IRoute) => {
    return <Route key={path} path={path} element={<Component />} />;
  };

  return <Routes>{routes.map(mapRoutes)}</Routes>;
};

export default AppRouter;
