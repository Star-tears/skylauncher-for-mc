import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function ScrollArea({ children }: Props) {
  return (
    <div
      className=" scrollbar-gutter-stable size-full overflow-y-auto
[&::-webkit-scrollbar-thumb]:rounded-full
[&::-webkit-scrollbar-thumb]:bg-gray-300
dark:[&::-webkit-scrollbar-thumb]:bg-slate-500
[&::-webkit-scrollbar-track]:rounded-full
[&::-webkit-scrollbar-track]:bg-gray-100
dark:[&::-webkit-scrollbar-track]:bg-slate-700
[&::-webkit-scrollbar]:w-2"
    >
      {children}
    </div>
  );
}

export default ScrollArea;
