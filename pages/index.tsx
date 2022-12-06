import Link from "next/link";
import { Avatar, Button, Input } from "@material-tailwind/react";
import { useState } from "react";

export default function Home() {
	const [showText, setShowText] = useState(false);

	const handlePasswordVisibility = () => {
		setShowText(!showText);
	};
	return (
		<div className="flex flex-col items-center justify-center w-full my-10">
			<Avatar
				src={"/logo.png"}
				alt="Logo"
				variant="circular"
				size="xxl"
			/>
			<h1 className="m-5 text-3xl">Cric Champs</h1>
			<p>
				New User?{" "}
				<Link href={`/sign-up`} className="text-red-600">
					Register
				</Link>
			</p>

			<div className="flex flex-col w-4/5 py-14">
				<div className="w-full pt-5">
					<Input variant="standard" label="Email" />
				</div>
				<div className="w-full pt-5">
					<Input
						variant="standard"
						label="Password"
						type={`${showText ? "text" : "password"}`}
						icon={
							<i
								className={`cursor-pointer fa  ${
									showText ? "fa-eye-slash" : "fa-eye"
								}`}
								onClick={handlePasswordVisibility}
							/>
						}
					/>
				</div>
			</div>
			<Link href={"#"} className="py-2 text-blue-400">
				Forgot Password?
			</Link>

			<Button
				variant="gradient"
				className="w-4/5 my-4 bg-gradient-to-r from-orange-300 to-red-400 "
				ripple={true}
			>
				Login
			</Button>
			<p className="py-6">Or</p>
			<Button
				variant="filled"
				className="w-4/5 mb-10 bg-blue-700"
				ripple={true}
			>
				Login With Facebook
			</Button>
		</div>
	);
}
