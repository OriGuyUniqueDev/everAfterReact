import React, { FunctionComponent } from "react";

interface LandingPageBtnProps {
	isNavBtn: boolean;
	isPrimary: boolean;
	children: React.ReactNode;
}

const LandingPageBtn: FunctionComponent<LandingPageBtnProps> = ({ children, isNavBtn, isPrimary }) => {
	return <button className={`${isNavBtn ? "navBtn" : "landingPageBtn"}  ${isPrimary ? "btnPrimary" : "btnSecondary"} w-[22rem] `}>{children}</button>;
};

export default LandingPageBtn;
