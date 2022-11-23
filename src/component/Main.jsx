import React from 'react';
import CarouselProduct from './CarouselProduct';
import Count from './Count';

const Main = () => {
  return (
    <>
      <main className=" bg-white md:mt-[88px] md:mb-20">
        <div className="md:container mx-auto">
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 md:gap-[118px] md:mx-1 md:px-12">
            <CarouselProduct />
            <div className="pl-[5px] w-full">
              <p className=" text-oranges mb-5 font-bold text-sm tracking-[0.075em] uppercase">sneaker company</p>
              <h1 className=" mb-[35px] capitalize text-very-dark-blue leading-[1.1] lead font-bold text-[44px]">
                fall limited edition sneakers
              </h1>
              <p className=" text-base font-normal text-dark-grayish-blue leading-[1.6]">
                These low-profile sneakers are you perfect casual wear companion. Featuring a durable rubber outer sole,
                they'll withstand everything the weather can offer.
              </p>
              <div className="flex items-center gap-4 mt-5">
                <p className=" text-very-dark-blue text-[30px] font-bold">$125.00</p>
                <span className=" text-oranges bg-pale-orange h-fit w-fit leading-none font-extrabold px-[10px] py-1 rounded-lg">
                  50%
                </span>
              </div>
              <s className=" font-bold tracking-wide text-grayish-blue">$250.00</s>
              <div className=" mt-9 mb-5">
                <Count />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
