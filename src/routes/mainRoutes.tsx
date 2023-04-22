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
	],
};
  
export default MainRoutes;