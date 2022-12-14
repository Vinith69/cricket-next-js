import { useState, useEffect, FC } from "react";
import { Navbar, Typography, IconButton } from "@material-tailwind/react";

type AppNavBarProps = {
  text: string;
  color?: boolean;
};
function AppNavBar({ text = "", color = false }: AppNavBarProps) {
  return (
    <nav
      className={`${
        color ? "bg-blue-800" : "bg-transparent"
      } flex flex-row  absolute top-0 z-10 items-center w-screen px-2 py-2 mx-auto mb-5 rounded-none lg:px-8 lg:py-4`}
    >
      <IconButton
        color="white"
        size="lg"
        className="bg-transparent rounded-full shadow-none hover:shadow-none"
      >
        <i className="text-xl text-white fa fa-arrow-left" />
      </IconButton>
      <Typography variant="h5" className=" text-white justify-center m-2">
        {text}
      </Typography>
    </nav>
  );
}

export default AppNavBar;
