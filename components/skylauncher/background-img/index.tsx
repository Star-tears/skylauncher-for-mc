import React, { ReactNode } from "react";
import { Image } from "@nextui-org/image";

function BackgroundImg({ children }: { children?: ReactNode }) {
  return (
    <div className=" relative size-full">
      <div className="absolute inset-0 z-0 transition-opacity dark:opacity-25 dark:transition-opacity">
        <Image
          removeWrapper
          className="size-full object-cover"
          alt="Background Image"
          src=""
        />
      </div>
      <div className=" relative size-full">{children}</div>
    </div>
  );
}

export default BackgroundImg;
