import React from "react";

type props = {
  children?: React.ReactNode;
};

const Card = ({ children }: props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white shadow-md w-[500px]">{children}</div>
      <div className="bg-white shadow-md h-1 w-[495px] border-b-2 border-b-site-gray-100"></div>
      <div className="bg-white shadow-md h-1 w-[490px] border-b-2 border-b-site-gray-100"></div>
    </div>
  );
};

export default Card;
