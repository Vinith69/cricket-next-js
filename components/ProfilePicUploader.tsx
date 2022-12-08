import { Avatar, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

function ProfilePicUploader() {
  return (
    <div className="flex relative justify-center items-center w-screen  h-[45vh]">
      {/* bg-blue-gray-500 */}
      <Image
        src={"/blueBg.jpg"}
        alt="Backgound"
        fill
        style={{
          clipPath: "polygon(0 0%, 100% 0, 100% 50%, 0 100%)",
        }}
        className="object-cover"
      />
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
      <button className="absolute bg-white w-10 h-10 rounded-full  top-[26vh] right-[25%] hover:shadow-none">
        <i className="fa-sharp fa-solid fa-upload" />
      </button>
    </div>
  );
}

export default ProfilePicUploader;
