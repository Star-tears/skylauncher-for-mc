import React, { ReactNode } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

function SettingsItem({ children }: { children?: ReactNode }) {
  return (
    <Card className=" w-2/3">
      {children}
    </Card>
  );
}

export default SettingsItem;
