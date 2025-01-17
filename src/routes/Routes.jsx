import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";


  const routes = createBrowserRouter([
	{
	  path: "/",
	  element: <MainLayout />,
	  children: [
		{
			path: '/',
			element: <Home></Home>,
			children: [
				{
					path: '',
				},
			]
		},
	  ]	,
	},
  ]);

  export default routes;