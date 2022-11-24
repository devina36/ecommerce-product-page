import React from 'react';

const ButtonNav = ({ text }) => {
  return (
    <button
      className=" 
     text-very-dark-blue lg:text-dark-grayish-blue text-left relative transition-all duration-300 ease-in-out font-bold lg:font-normal text-lg w-fit mb-[18px] lg:mb-0
      after:w-full after:h-1 after:bg-oranges after:absolute after:-bottom-2 after:left-0 after:invisible after:rounded-lg
      hover:after:visible lg:hover:text-very-dark-blue hover:after:animate-slideleft lg:tracking-tight tracking-wide lg:text-base lg:py-10"
    >
      {text}
    </button>
  );
};

export default ButtonNav;
