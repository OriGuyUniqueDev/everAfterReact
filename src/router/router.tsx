import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";

export const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <LandingPage />,
		},
	],
	{
		basename: "/",
	}
);
