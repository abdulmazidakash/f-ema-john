
import logo from '../../src/images/logo.png'

const Header = () => {
	return (
		<div>
			<img className='h-[80px] text-center mx-auto'  src={logo} alt="" />
			<nav className='text-center font-semibold text-white bg-black p-4 '>
				<a href="/">Shop</a>
				<a className='ml-4' href="/review">Order Review</a>
				<a className='ml-4' href="/manage">Manage Inventory Here</a> 
			</nav>
		</div>
	);
};

export default Header;