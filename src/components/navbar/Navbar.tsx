import { FunctionComponent } from "react";
import { Link, NavLink } from "react-router-dom";
import LandingPageBtn from "../../pages/landingPage/components/LandingPageBtn";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
	return (
		<header className="col-span-12 flex relative z-10">
			<nav className="flex gap-[2.8rem] items-start justify-between w-[100%]">
				<div className="flex gap-[2.8rem] items-center">
					<Link
						to={"/"}
						className="font-serif xl:text-[2.6rem] md:text-[2.6rem] text-[2.6rem]"
					>
						EverAfter
					</Link>
					<NavLink
						to={"/"}
						className="navLink md:block hidden"
					>
						Features
					</NavLink>
					<NavLink
						to={"/"}
						className="navLink md:block hidden"
					>
						About
					</NavLink>
				</div>
				<div className="none md:flex md:gap-[1.2rem]  hidden">
					<LandingPageBtn
						isNavBtn={true}
						isPrimary={true}
					>
						Login
					</LandingPageBtn>
					<LandingPageBtn
						isNavBtn={true}
						isPrimary={false}
					>
						SignUp
					</LandingPageBtn>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
