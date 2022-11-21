import React from 'react';
import CarouselProduct from './CarouselProduct';

const Main = () => {
  return (
    <main className=" bg-white mt-[88px] mb-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-[118px] mx-1 px-12">
          <CarouselProduct />
        </div>
      </div>
    </main>
  );
};

export default Main;
