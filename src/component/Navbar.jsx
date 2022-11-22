import React, { useState } from 'react';
import ButtonNav from './ButtonNav';
import { BsCart3 } from 'react-icons/bs';
import { Logo, Close, Profile, Menu } from '../assets/images';

const Navbar = () => {
  const [cart, setCart] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleCart = () => {
    setCart(!cart);
    setMenu(false);
  };

  return (
    <nav className=" bg-white relative">
      <div className="container mx-auto py-4 md:py-0">
        <div className=" flex mx-2 md:mx-1 justify-between items-center pb-2 md:border-b-2">
          <div className="flex gap-4 md:gap-14 items-center">
            <label htmlFor="logo">
              <a href="/">
                <img src={Logo} alt="logo" />
              </a>
            </label>
            <div className=" md:flex gap-8 hidden">
              <ButtonNav text={'Collections'} />
              <ButtonNav text={'Men'} />
              <ButtonNav text={'Women'} />
              <ButtonNav text={'About'} />
              <ButtonNav text={'Contact'} />
            </div>
            {/* button sidebar */}
            <div className=" md:hidden flex order-first md:order-none">
              <img
                src={Menu}
                className="cursor-pointer"
                onClick={() => {
                  setMenu(true);
                  setCart(false);
                }}
                alt="menu"
              />
            </div>
          </div>
          <div className="flex gap-4 md:gap-12 items-center">
            <div className=" relative">
              <BsCart3
                size={23}
                onClick={handleCart}
                className={` ${
                  cart ? `text-very-dark-blue` : `text-dark-grayish-blue`
                } hover:text-very-dark-blue cursor-pointer`}
              />
              <div className=" absolute bg-oranges text-white -top-1 text-[9px] px-[7px] rounded-md z-10 -right-[5px]">
                3
              </div>
            </div>
            <div
              className=" 
            w-[28px] h-[28px] md:w-[50px] md:h-[50px] rounded-full border-2 border-transparent 
            cursor-pointer hover:border-oranges overflow-hidden "
            >
              <img src={Profile} alt="profile" className=" rounded-full object-cover w-full h-full scale-110" />
            </div>
          </div>
        </div>
      </div>

      {/* sidebar mobile */}
      <div
        className={`absolute top-0 w-4/6 py-6 px-6 z-50 bg-white shadow-lg animate-slide-in min-h-screen ${
          menu === false && `hidden`
        }`}
      >
        <img src={Close} alt="close" onClick={() => setMenu(false)} />
        <div className=" mt-[50px] flex flex-col">
          <ButtonNav text={'Collections'} />
          <ButtonNav text={'Men'} />
          <ButtonNav text={'Women'} />
          <ButtonNav text={'About'} />
          <ButtonNav text={'Contact'} />
        </div>
      </div>
      {/* cart */}
      <div
        className={`absolute w-[360px] h-[255px] rounded-lg top-24 z-50 ml-1 right-2 md:right-[90px] bg-white shadow-xl 
              ${cart === false && `hidden`}`}
      >
        <h2 className=" font-semibold border-b-2 py-5 px-6">Cart</h2>
        <div className=" flex justify-center items-center h-[175px]">
          <p className=" text-dark-grayish-blue font-bold">Your cart is empty</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
