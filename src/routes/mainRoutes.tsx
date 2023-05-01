import { lazy } from "react";
import { IRoute } from "./routes";
import LazyLoader from "@/components/UI/Loaders/Loader.Lazy";
import MainLayout from "@/layout/main/MainLayout";

const MainRoutes: IRoute = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: LazyLoader(lazy(() => import("../pages/Panel/Home/View"))),
    },
    {
      path: "/quiz",
      element: LazyLoader(lazy(() => import("../pages/Panel/Quiz/View"))),
    },
    {
      path: "/quiz/result",
      element: LazyLoader(lazy(() => import("../pages/Panel/Result/View"))),
    },
  ],
};

export default MainRoutes;
