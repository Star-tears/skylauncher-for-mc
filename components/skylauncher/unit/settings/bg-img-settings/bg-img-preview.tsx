import React from "react";
import { Image } from "@nextui-org/image";

type Props = {
  blurLevel?: string;
  opacityValue?: number;
  src?: string;
};

function BgImgPreview({ blurLevel, opacityValue, src }: Props) {
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
    <div
      className={`${blurclass}`}
      style={{
        opacity: opacityValue as number,
      }}
    >
      <Image height={100} width={150} alt="Preview Backgound Image" src={src} />
    </div>
  );
}

export default BgImgPreview;
