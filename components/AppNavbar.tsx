import { useState, useEffect, FC } from "react";
import {
	Navbar,
	MobileNav,
	Typography,
	Button,
	IconButton,
} from "@material-tailwind/react";

type AppNavBarProps = {
	text: string;
};
function AppNavBar({ text = "" }: AppNavBarProps) {
	return (
		<Navbar
			shadow={false}
			className="max-w-screen-xl px-2 py-2 mx-auto mb-5 bg-transparent rounded-none lg:px-8 lg:py-4"
		>
			<IconButton
				color="white"
				size="lg"
				className="bg-transparent rounded-full hover:shadow-none"
			>
				<i className="text-xl text-black fa fa-arrow-left" />
			</IconButton>
			<Typography variant="h3"> {text}</Typography>
		</Navbar>
	);
}

export default AppNavBar;
