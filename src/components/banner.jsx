import React from "react";

const Banner = ({imageFile, children}) => {
  return (
    <div
      className={`flex -z-20 justify-center items-center w-full h-screen bg-cover bg-center`}
      style={{ backgroundImage: `url(${imageFile})` }}>
      {children}
    </div>
  );
};

export default Banner;
