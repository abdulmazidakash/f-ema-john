import { Outlet } from "react-router-dom";

const Home = () => {

	return (
		<div>

			<Outlet />

			{/* Dynamic nested components  */}
		</div>
	);
};

export default Home;