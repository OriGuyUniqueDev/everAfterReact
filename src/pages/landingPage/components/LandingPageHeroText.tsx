import { FunctionComponent } from "react";
import LandingPageBtn from "./LandingPageBtn";

interface LandingPageHeroTextProps {}

const LandingPageHeroText: FunctionComponent<LandingPageHeroTextProps> = () => {
	return (
		<div className="lg:col-span-7 sm:col-span-10 col-span-12 sm:col-start-2 lg:col-start-1 items-center text-center lg:text-left lg:items-start flex flex-col xl:gap-[3.2rem] md:gap-[3.2rem] gap-4">
			<h1 className="xl:text-[5.8rem] md:text-[6.5rem] text-[4.5rem]">
				Find your happily ever after with <strong className="text-secondary">EverAfter</strong>
			</h1>
			<p className="xl:text-[2rem] md:text-[2.2rem] text-[1.6rem]">Looking for a magical and unforgettable wedding? EverAfter has got you covered. Our platform offers everything you need to plan your dream wedding, from venue selection to vendor bookings. Sign up now and start planning your happily ever after.</p>
			<div className="flex flex-col md:flex-row md:gap-[2.4rem]">
				<LandingPageBtn
					isNavBtn={false}
					isPrimary={true}
				>
					Start Planing
				</LandingPageBtn>
				<LandingPageBtn
					isNavBtn={false}
					isPrimary={false}
				>
					Discover EverAfter
				</LandingPageBtn>
			</div>
		</div>
	);
};

export default LandingPageHeroText;
