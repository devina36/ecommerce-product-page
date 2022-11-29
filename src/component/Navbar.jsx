import React, { useEffect, useState } from 'react';
import ButtonNav from './ButtonNav';
import { BsCart3 } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import { Logo, Close, Profile, Menu } from '../assets/images';
import { Thumb1 } from '../assets/images';

const Navbar = () => {
  const [cart, setCart] = useState(false);
  const [menu, setMenu] = useState(false);
  const [data, setData] = useState(null);

  const handleCart = () => {
    setCart(!cart);
    setMenu(false);
  };

  const remove = () => {
    localStorage.removeItem('data');
    window.location.reload();
  };

  useEffect(() => {
    const get = JSON.parse(localStorage.getItem('data')) || null;
    setData(get);
  }, [data]);

  return (
    <nav className=" bg-white relative">
      <div className="container relative mx-auto py-4 md:py-6 lg:py-0">
        <div className=" flex mx-2 md:mx-1 justify-between items-center pb-2 md:border-b-2">
          <div className="flex gap-4 md:gap-14 items-center">
            <img src={Logo} alt="logo" />
            <div className=" lg:flex gap-8 hidden">
              <ButtonNav text={'Collections'} />
              <ButtonNav text={'Men'} />
              <ButtonNav text={'Women'} />
              <ButtonNav text={'About'} />
              <ButtonNav text={'Contact'} />
            </div>
            {/* button sidebar */}
            <div className=" lg:hidden flex order-first lg:order-none">
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
                {data}
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
        className={`fixed top-0 w-4/6 max-w-[350px] py-6 px-6 z-50 bg-white shadow-lg animate-slide-in min-h-screen ${
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
        <h2 className=" font-semibold border-b-2 py-5 mx-6">Cart</h2>
        {data === null ? (
          <div className=" flex justify-center items-center h-[175px]">
            <p className=" text-dark-grayish-blue font-bold">Your cart is empty</p>
          </div>
        ) : (
          <div className=" mx-6 my-6">
            <div className="flex items-center justify-between">
              <img src={Thumb1} alt="thumb" className=" w-[50px] h-[50px] rounded-lg" />
              <div className=" flex flex-col">
                <p className=" tracking-[0.0075em] text-dark-grayish-blue">Fall Limited Edition Sneakers</p>
                <p className=" tracking-wide text-dark-grayish-blue">
                  $125.00 x {data} &nbsp;
                  <span className=" text-very-dark-blue font-bold tracking-wider">${125 * data}.00</span>
                </p>
              </div>
              <button onClick={remove}>
                <FaTrashAlt className=" text-grayish-blue hover:text-oranges" />
              </button>
            </div>
            <button className="w-full py-4 bg-oranges mt-6 text-white font-bold rounded-lg">Checkout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
