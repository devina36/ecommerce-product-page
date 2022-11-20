import React from 'react';

const ButtonNav = ({ text }) => {
  return (
    <button
      className=" 
     text-dark-grayish-blue text-left relative transition-all duration-300 ease-in-out font-bold md:font-normal text-lg w-fit mb-[18px] md:mb-0
      after:w-full after:h-1 after:bg-oranges after:absolute after:-bottom-2 after:left-0 after:invisible after:rounded-md
      hover:after:visible hover:text-black hover:after:animate-slideleft md:tracking-tight tracking-wide md:text-base md:py-10"
    >
      {text}
    </button>
  );
};

export default ButtonNav;
