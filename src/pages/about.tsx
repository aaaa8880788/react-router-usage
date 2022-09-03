import React, { memo } from "react";
import { Outlet } from "react-router-dom";

const about = memo(() => {
  return (
    <div>
      <h1>about</h1>
      <Outlet></Outlet>
    </div>
  );
});

export default about;
