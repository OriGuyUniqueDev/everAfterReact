import { FunctionComponent } from "react";
import Navbar from "../../components/navbar/Navbar";
import LandingPageHeroText from "./components/LandingPageHeroText";

interface LandingPageProps {}

const LandingPage: FunctionComponent<LandingPageProps> = () => {
	return (
		<div className="grid grid-cols-12  max-w-[1280px]  items-baseline h-[100svh] gap-5 2xl:mx-auto xl:mx-[6.8rem] md:mx-[1.6rem] mx-[1.2rem] py-[2.2rem]">
			<Navbar />
			<div className="grid grid-cols-12 gap-4  sm:gap-24 lg:gap5 col-span-full   items-center">
				<LandingPageHeroText />

				<img
					src="/hero.svg"
					alt=""
					className="h-auto hidden sm:block  col-span-6 col-start-4 lg:col-start-9 justify-end  "
				/>
			</div>
		</div>
	);
};

export default LandingPage;
