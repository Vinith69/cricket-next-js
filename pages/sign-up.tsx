import Link from "next/link";
import { Button, Input, Radio } from "@material-tailwind/react";
import { useState } from "react";
import AppNavBar from "../components/AppNavbar";
import ProfilePicUploader from "../components/ProfilePicUploader";

function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen mt-0">
      <AppNavBar text="Register" />
      <ProfilePicUploader />

      <div className="flex flex-col justify-around w-4/5  min-h-[60vh] mt-10">
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
        <div className="flex justify-center my-2">
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
      >
        Proceed
      </Button>
    </div>
  );
}

export default SignUp;
