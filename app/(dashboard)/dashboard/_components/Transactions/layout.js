import React from "react";

const Transactionlayout = ({ children }) => {
  return (
    <div className="py-24 bg-red-300">
      <h2 className="text-red-400 text-3xl mx-auto">Helooo</h2>
      <div>{children}</div>
    </div>
  );
};

export default Transactionlayout;
