import { Avatar, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

function ProfilePicUploader() {
	return (
		<div className="flex justify-center w-screen bg-blue-gray-500">
			<div className="relative w-48 h-48 bg-red-300 rounded-full">
				<Image
					src={"/logo.png"}
					alt="Logo"
					// width={100}
					// height={100}
					fill
					className="object-cover rounded-full"
				/>
			</div>
			<IconButton
				color="white"
				size="lg"
				className="absolute bg-red-200 rounded-full  top-[16rem] right-28 hover:shadow-none"
			>
				<i className="fa-sharp fa-solid fa-upload" />
			</IconButton>
		</div>
	);
}

export default ProfilePicUploader;
