import { Avatar, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfileURL } from "../redux/imageUploadSlice";
import { RootState } from "../redux/store";

type profilePicUploaderProps = {
  handleOnClick: MouseEventHandler<HTMLElement>;
};

function ProfilePicUploader({ handleOnClick }: profilePicUploaderProps) {
  // const profilePicRef = useRef<HTMLInputElement>(null);
  const { imageLink } = useSelector((state: RootState) => state.image);
  const dispatch = useDispatch();

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    const reader = new FileReader();
    if (e.target.files) {
      reader.onloadend = () => {
        dispatch(setProfileURL(reader.result));
        reader.result !== null &&
          localStorage.setItem("profilePic", reader.result.toString());
      };
      reader.readAsDataURL(e.target.files[0]);
    }
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
          src={imageLink}
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
