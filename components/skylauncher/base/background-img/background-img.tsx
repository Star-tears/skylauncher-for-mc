import React, { ReactNode, useState } from "react";
import { Image } from "@nextui-org/image";

type Props = {
  children?: ReactNode;
  imgSrc?: string;
  blurLevel?: string;
  opacityValue?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
};

function BackgroundImg({
  children,
  imgSrc,
  blurLevel,
  opacityValue,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}: Props) {
  let blurclass: string;
  switch (blurLevel) {
    case "none":
      blurclass = "blur-none";
      break;
    case "sm":
      blurclass = "blur-sm";
      break;
    case "default":
      blurclass = "blur";
      break;
    case "md":
      blurclass = "blur-md";
      break;
    case "lg":
      blurclass = "blur-lg";
      break;
    case "xl":
      blurclass = "blur-xl";
      break;
    case "2xl":
      blurclass = "blur-2xl";
      break;
    case "3xl":
      blurclass = "blur-3xl";
      break;
    default:
      blurclass = "blur-none";
      break;
  }
  return (
    <div className=" relative size-full overflow-hidden">
      <div className="transition-opacity dark:opacity-50 dark:transition-opacity">
        <div
          className="absolute inset-0 z-0 transition-opacity dark:transition-opacity"
          style={{
            opacity: opacityValue,
          }}
        >
          <div
            className={`absolute overflow-hidden ${blurclass}`}
            style={{
              left: marginLeft,
              right: marginRight,
              top: marginTop,
              bottom: marginBottom,
            }}
          >
            <Image
              radius="lg"
              removeWrapper
              className="size-full object-cover"
              classNames={{ img: "object-cover", wrapper: "size-full" }}
              alt="Background Image"
              src={imgSrc}
            />
          </div>
        </div>
      </div>

      <div className=" relative size-full">{children}</div>
    </div>
  );
}

export default BackgroundImg;
