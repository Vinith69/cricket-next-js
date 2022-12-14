import { useRouter } from "next/router";
import { Button, Input, Radio } from "@material-tailwind/react";
import { useState } from "react";
import AppNavBar from "../components/AppNavbar";
import ProfilePicUploader from "../components/ProfilePicUploader";

function SignUp() {
  const router = useRouter();
  const handleProceed = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    let profilePic = localStorage.getItem("profilePic");
    console.log(profilePic);
    // router.push("/sign-up-enter-password");
  };

  const handleProfilePic = () => {};
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen mt-0">
      <AppNavBar text="Register" />
      <ProfilePicUploader handleOnClick={handleProfilePic} />

      <div className="flex flex-col justify-around w-4/5  min-h-[55vh] mt-10">
        <div className="w-full ">
          <Input variant="standard" label="* Full Name" />
        </div>
        <div className="w-full ">
          <Input variant="standard" label="* Email" />
        </div>
        <div className="w-full ">
          <Input variant="standard" label="Phone No (Optional)" />
        </div>
        <div className="w-full ">
          <Input variant="standard" label="City (Optional)" />
        </div>
        <div className="flex justify-center mb-2">
          <Radio
            id="Female"
            label="Male"
            name="gender"
            color="red"
            ripple={true}
            defaultChecked
          />
          <Radio
            id="Female"
            label="Female"
            name="gender"
            color="red"
            ripple={true}
          />
        </div>
      </div>

      <Button
        variant="gradient"
        className="w-screen mt-auto rounded-none bg-gradient-to-r from-orange-300 to-red-400"
        ripple={true}
        onClick={handleProceed}
      >
        Proceed
      </Button>
    </div>
  );
}

export default SignUp;
