import React, { ReactNode } from "react";
import { BackgroundImg } from "@/components/skylauncher/base/background-img";
import useBgImgStore from "@/hooks/stores/bg-img.store";

type Props = {
  children?: ReactNode;
};

function BgImgUnit({ children }: Props) {
  const imgSrc = useBgImgStore((state) => state.imgSrc);
  const blurLevel = useBgImgStore((state) => state.blurLevel);
  const opacityValue = useBgImgStore((state) => state.opacityValue);
  const marginLeft = useBgImgStore((state) => state.marginLeft);
  const marginRight = useBgImgStore((state) => state.marginRight);
  const marginTop = useBgImgStore((state) => state.marginTop);
  const marginBottom = useBgImgStore((state) => state.marginBottom);
  return (
    <BackgroundImg
      imgSrc={imgSrc}
      blurLevel={blurLevel}
      opacityValue={opacityValue}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      {children}
    </BackgroundImg>
  );
}

export default BgImgUnit;
