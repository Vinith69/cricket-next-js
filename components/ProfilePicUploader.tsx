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
        className="object-cover opacity-82"
      />
      <div
        className="opacity-30 bg-black h-[100%] w-screen absolute "
        style={{
          clipPath: "polygon(0 0%, 100% 0, 100% 50%, 0 100%)",
        }}
      ></div>
      <div className="relative w-48 h-48 bg-red-300 rounded-full">
        <Image
          src={"/logo.png"}
          alt="Logo"
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
