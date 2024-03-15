import React, { ReactNode } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

function SettingsHeader({ children }: { children?: ReactNode }) {
  return (
    <CardHeader>
      <div>
        <p className="text-md font-bold">{children}</p>
      </div>
    </CardHeader>
  );
}

export default SettingsHeader;
