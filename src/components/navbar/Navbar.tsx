import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
	return (
		<nav>
			<Link
				to={"/"}
				className="font-serif text-2xl text-white"
			>
				EverAfter
			</Link>
		</nav>
	);
};

export default Navbar;
