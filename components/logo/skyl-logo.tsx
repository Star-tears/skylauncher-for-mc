import React from "react";
import Image from "next/image";
import SkyLauncherLogoSvg from "@/public/images/skylauncher-for-mc-logo.svg";

export default function SkylLogo() {
  return (
    <div>
      <Image
        priority
        src={SkyLauncherLogoSvg}
        alt="Follow us on www.sky-crafting.com"
        className=" h-7 w-7"
      />
    </div>
  );
}
