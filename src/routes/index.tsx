import { RouteObject } from "react-router-dom";
import HomePage from "src/pages/public/HomePagePublic";
import LoginPage from "src/pages/public/LoginPage";
import NotFound from "src/pages/public/NotFoundPage";
import RegisterPage from "src/pages/public/RegisterPage";

const routes: RouteObject[] = [
	{
		path: "",
		element: <HomePage />
	},
	{
		path: "login",
		element: <LoginPage />
	},
	{
		path: "register",
		element: <RegisterPage />
	},
	{
		path: "*",
		element: <NotFound />
	},
];

export default routes;