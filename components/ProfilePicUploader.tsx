import { Avatar, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
type profilePicUploaderProps = {
	handleOnClick: MouseEventHandler<HTMLElement>;
};

function ProfilePicUploader({ handleOnClick }: profilePicUploaderProps) {
	// const profilePicRef = useRef<HTMLInputElement>(null);

	const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e);
	};
	return (
		<div className="flex relative justify-center items-center w-screen  h-[40vh]">
			{/* bg-blue-gray-500 */}
			<Image
				src={"/blueBg.jpg"}
				alt="Backgound"
				fill
				style={{
					clipPath: "polygon(0 0%, 100% 0, 100% 30%, 0 100%)",
				}}
				className="object-cover opacity-82"
			/>
			<div
				className="opacity-30 bg-black h-[100%] w-screen absolute "
				style={{
					clipPath: "polygon(0 0%, 100% 0, 100% 30%, 0 100%)",
				}}
			></div>
			<div className="relative w-48 h-48 mt-[10vh] bg-red-300 rounded-full">
				<Image
					src={"/logo.png"}
					alt="Logo"
					fill
					className="object-cover rounded-full"
				/>
			</div>
			<button
				// onClick={handleOnClick}
				// onClick={() =>
				// 	profilePicRef.current && profilePicRef.current.click()
				// }
				className="absolute bg-white w-10 h-10 rounded-full top-[28vh] right-[25%] hover:shadow-none"
			>
				<input
					type="file"
					multiple={false}
					onChange={handleImage}
					// ref={profilePicRef}
					className="absolute top-3 right-0 block text-[1px] opacity-0 "
				/>
				<i className="fa-sharp fa-solid fa-upload" />
			</button>
		</div>
	);
}

export default ProfilePicUploader;
