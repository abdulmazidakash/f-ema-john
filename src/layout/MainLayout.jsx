import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";



const MainLayout = () => {
	return (
		<div>

			{/* Navbar  */}
			<div className="h-16">
				<Header/>
			</div>
			{/* Dynamic Section  */}
			<div className="min-h-[calc(100vh-212px)] py-12 container mx-auto">
				<Outlet />
			</div>
			{/* Footer  */}
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default MainLayout;