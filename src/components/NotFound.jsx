import React from "react";
import error from "/error.gif";
function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <img src={error} alt="" />
    </div>
  );
}

export default NotFound;
