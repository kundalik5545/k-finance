import React from "react";

const Mainlayout = ({ children }) => {
  return (
    <div className="p-2 pt-[50px]">
      <div className="py-3">{children}</div>
    </div>
  );
};

export default Mainlayout;
