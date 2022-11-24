import React from 'react';
import CarouselProduct from './CarouselProduct';
import Count from './Count';

const Main = () => {
  return (
    <>
      <main className=" bg-white md:my-14 xl:mt-[88px] xl:mb-20">
        <div className="md:container mx-auto">
          <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-4 md:gap-16 xl:gap-[118px] md:mx-1 md:px-6 lg:px-12">
            <CarouselProduct />
            <div className="lg:pl-[5px] lg:pr-0 px-[22px] max-w-[480px] w-full place-self-start lg:place-self-center">
              <p className=" text-oranges mb-2 md:mb-5 font-bold md:text-sm text-[13px] tracking-[0.075em] uppercase">
                sneaker company
              </p>
              <h1 className=" mb-4 md:mb-[35px] capitalize text-very-dark-blue leading-[1.2] md:leading-[1.1] lead font-bold text-[28px] md:text-4xl lg:text-[44px]">
                fall limited edition sneakers
              </h1>
              <p className="md:text-base text-[15px] font-normal text-dark-grayish-blue leading-[1.6]">
                These low-profile sneakers are you perfect casual wear companion. Featuring a durable rubber outer sole,
                they'll withstand everything the weather can offer.
              </p>
              <div className="flex md:flex-col flex-row justify-between md:justify-start items-center md:items-start mt-5">
                <div className="flex items-center gap-4">
                  <p className=" text-very-dark-blue text-[30px] font-bold">$125.00</p>
                  <span className=" text-oranges bg-pale-orange h-fit w-fit leading-none font-extrabold px-[10px] py-1 rounded-lg">
                    50%
                  </span>
                </div>
                <s className=" font-bold tracking-wide text-grayish-blue">$250.00</s>
              </div>

              <div className=" mt-5 md:mt-9 mb-10 lg:mb-5">
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
