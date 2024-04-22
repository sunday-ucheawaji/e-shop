import React from "react";

const DynamicMain = ({ children }: { children: React.ReactNode }) => {
  return <main className="flex-grow">{children}</main>;
};

export default DynamicMain;
