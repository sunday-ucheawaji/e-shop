import React from "react";
import CircularProgress from "@mui/joy/CircularProgress";

const SuspenseLoader = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <CircularProgress variant="solid" />
    </div>
  );
};

export default SuspenseLoader;
