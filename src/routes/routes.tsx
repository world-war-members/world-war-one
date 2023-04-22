import { useRoutes } from "react-router-dom";

export interface IRoute {
  permissions?: string[];
  children?: IRoute[];
  element?: React.ReactNode;
  path?: string;
  key?: string;
  authGuard?: boolean;
}

// routes
import MainRoutes from "./mainRoutes";

// routing render
export default function Router() {
	return useRoutes([MainRoutes]);
}
