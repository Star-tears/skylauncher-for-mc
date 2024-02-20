import React, { ReactNode } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

type Props = {
  children?: ReactNode;
};

function SettingsBody({ children }: { children?: ReactNode }) {
  return <CardBody>{children}</CardBody>;
}

export default SettingsBody;
