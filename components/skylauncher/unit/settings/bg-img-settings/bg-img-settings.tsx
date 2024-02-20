import React, { ChangeEvent, useState } from "react";
import {
  SettingsItem,
  SettingsBody,
  SettingsAdvancedOpt,
  SettingsHeader,
} from "@/components/skylauncher/base/settings";
import { useTranslation } from "react-i18next";
import { Divider } from "@nextui-org/divider";
import { Input as NextuiInput } from "@nextui-org/input";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Slider, SliderValue } from "@nextui-org/slider";
import { Tooltip } from "@nextui-org/tooltip";
import useBgImgStore from "@/hooks/stores/bg-img.store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import BgImgPreview from "./bg-img-preview";

function BgImgSettings() {
  const [src, setSrc] = useState("");
  const { t } = useTranslation();
  const [opacityValue, setOpacityValue] = useState<SliderValue>(1.0);
  const [inputValue, setInputValue] = useState<string>("1.0");
  const [blurLevel, setBlurLevel] = useState<string>("none");
  const [marginLeft, setMarginLeft] = useState<number>(0);
  const [marginRight, setMarginRight] = useState<number>(0);
  const [marginTop, setMarginTop] = useState<number>(0);
  const [marginBottom, setMarginBottom] = useState<number>(0);
  const setImgSrcStore = useBgImgStore((state) => state.setImgSrc);
  const setBlurLevelStore = useBgImgStore((state) => state.setBlurLevel);
  const setOpacityValueStore = useBgImgStore((state) => state.setOpacityValue);
  const setMarginLeftStore = useBgImgStore((state) => state.setMarginLeft);
  const setMarginRightStore = useBgImgStore((state) => state.setMarginRight);
  const setMarginTopStore = useBgImgStore((state) => state.setMarginTop);
  const setMarginBottomStore = useBgImgStore((state) => state.setMarginBottom);

  const MARGIN_MIN = -200;
  const MARGIN_MAX = 200;
  const BLUR_LEVEL_LIST = [
    "none",
    "sm",
    "default",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ];

  const handleChange = (value: SliderValue) => {
    if (isNaN(Number(value))) return;

    setOpacityValue(value);
    setInputValue(value.toString());
  };
  const handleChangeBtnClicked = () => {
    setImgSrcStore(src);
    setBlurLevelStore(blurLevel);
    setOpacityValueStore(opacityValue as number);
    setMarginLeftStore(marginLeft);
    setMarginRightStore(marginRight);
    setMarginTopStore(marginTop);
    setMarginBottomStore(marginBottom);
  };

  function handleBlurLevelSelectionChange(
    event: ChangeEvent<HTMLSelectElement>,
  ): void {
    setBlurLevel(event.target.value);
  }

  return (
    <SettingsItem>
      <SettingsHeader>{t("Wallpaper settings")}</SettingsHeader>
      <Divider />
      <SettingsBody>
        <div className=" flex flex-col space-y-2">
          <div className="flex flex-row">
            <div className=" flex-grow">
              <NextuiInput
                variant="flat"
                label="Image Src"
                onValueChange={(s) => {
                  setSrc(s);
                }}
              />
            </div>
            <div className="mx-2 flex flex-row space-x-4">
              <Divider orientation="vertical" />
              <div className=" space-y-2">
                <div className="flex flex-row justify-between">
                  <p className="text-justify italic">{t("Previews")}</p>
                  <Button
                    size="sm"
                    color="primary"
                    variant="ghost"
                    onClick={handleChangeBtnClicked}
                  >
                    {t("Change")}
                  </Button>
                </div>
                <BgImgPreview
                  src={src}
                  opacityValue={opacityValue as number}
                  blurLevel={blurLevel}
                />
              </div>
            </div>
          </div>
          <div>
            <Divider />
            <SettingsAdvancedOpt>
              <div>
                <Slider
                  label={t("Opacity")}
                  size="sm"
                  step={0.01}
                  maxValue={1}
                  minValue={0}
                  color="foreground"
                  classNames={{
                    label: "text-medium",
                  }}
                  // we extract the default children to render the input
                  renderValue={({ children, ...props }) => (
                    <output {...props}>
                      <Tooltip
                        className="rounded-md text-tiny text-default-500"
                        content="Press Enter to confirm"
                        placement="left"
                      >
                        <input
                          className="w-12 rounded-small border-medium border-transparent bg-default-100 px-1 py-0.5 text-right text-small font-medium text-default-700 outline-none transition-colors hover:border-primary focus:border-primary"
                          type="text"
                          aria-label="Temperature value"
                          value={inputValue}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>,
                          ) => {
                            const v = e.target.value;

                            setInputValue(v);
                          }}
                          onKeyDown={(
                            e: React.KeyboardEvent<HTMLInputElement>,
                          ) => {
                            if (
                              e.key === "Enter" &&
                              !isNaN(Number(inputValue))
                            ) {
                              setOpacityValue(Number(inputValue));
                            }
                          }}
                        />
                      </Tooltip>
                    </output>
                  )}
                  value={opacityValue}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-row gap-2">
                <Card className="w-1/2">
                  <CardHeader>
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Margin</h4>
                      <p className="text-sm text-muted-foreground">
                        Set the margin for the walpaper.
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <div className="grid grid-cols-2 items-center gap-4">
                          <Label htmlFor="marginleft">Margin Left</Label>
                          <Input
                            type="number"
                            id="marginleft"
                            defaultValue={0}
                            min={MARGIN_MIN}
                            max={MARGIN_MAX}
                            value={marginLeft}
                            onChange={(e) => {
                              if (!isNaN(Number(e.target.value))) {
                                let num = Number(e.target.value);
                                if (num > MARGIN_MAX) num = MARGIN_MAX;
                                if (num < MARGIN_MIN) num = MARGIN_MIN;
                                setMarginLeft(num);
                              }
                            }}
                          />
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4">
                          <Label htmlFor="marginright">Margin Right</Label>
                          <Input
                            type="number"
                            id="marginright"
                            defaultValue={0}
                            min={MARGIN_MIN}
                            max={MARGIN_MAX}
                            value={marginRight}
                            onChange={(e) => {
                              if (!isNaN(Number(e.target.value))) {
                                let num = Number(e.target.value);
                                if (num > MARGIN_MAX) num = MARGIN_MAX;
                                if (num < MARGIN_MIN) num = MARGIN_MIN;
                                setMarginRight(num);
                              }
                            }}
                          />
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4">
                          <Label htmlFor="margintop">Margin Top</Label>
                          <Input
                            type="number"
                            id="margintop"
                            defaultValue={0}
                            min={MARGIN_MIN}
                            max={MARGIN_MAX}
                            value={marginTop}
                            onChange={(e) => {
                              if (!isNaN(Number(e.target.value))) {
                                let num = Number(e.target.value);
                                if (num > MARGIN_MAX) num = MARGIN_MAX;
                                if (num < MARGIN_MIN) num = MARGIN_MIN;
                                setMarginTop(num);
                              }
                            }}
                          />
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4">
                          <Label htmlFor="marginbottom">Margin Bottom</Label>
                          <Input
                            type="number"
                            id="marginbottom"
                            className="col-span-1 h-8"
                            defaultValue={0}
                            min={MARGIN_MIN}
                            max={MARGIN_MAX}
                            value={marginBottom}
                            onChange={(e) => {
                              if (!isNaN(Number(e.target.value))) {
                                let num = Number(e.target.value);
                                if (num > MARGIN_MAX) num = MARGIN_MAX;
                                if (num < MARGIN_MIN) num = MARGIN_MIN;
                                setMarginBottom(num);
                              }
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Divider orientation="vertical" />
                <Card className="w-1/2">
                  <CardContent>
                    <div className=" mt-4 space-y-2">
                      <Select
                        label="Blur"
                        size="sm"
                        variant="bordered"
                        placeholder="Select a blur level"
                        selectedKeys={[blurLevel]}
                        className="max-w-xs"
                        onChange={handleBlurLevelSelectionChange}
                      >
                        {BLUR_LEVEL_LIST.map((blurlv) => (
                          <SelectItem key={blurlv} value={blurlv}>
                            {blurlv}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </SettingsAdvancedOpt>
          </div>
        </div>
      </SettingsBody>
    </SettingsItem>
  );
}

export default BgImgSettings;
