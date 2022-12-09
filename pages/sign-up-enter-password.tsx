import Image from "next/image";
import React from "react";
import AppNavBar from "../components/AppNavbar";

function SignUpEnterPassword() {
  return (
    <div>
      <AppNavBar text="Set Password" color={true} />
      <div>
        <Image src="" alt="password lock" />
      </div>
    </div>
  );
}

export default SignUpEnterPassword;
