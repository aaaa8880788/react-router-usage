import React, { memo } from "react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const test = memo(() => {
  const navigator = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      navigator("/home");
      console.log(location);
    }
  }, [location]);
  return <div>test</div>;
});

export default test;
