import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Product1, Product2, Product3, Product4 } from '../assets/images';

const CarouselProduct = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <div
          className="relative w-full h-full hover:after:bg-white hover:after:bg-opacity-60 hover:after:w-full 
          hover:after:h-full hover:after:absolute hover:after:z-20 hover:after:top-0 hover:after:rounded-xl"
        >
          <img
            className="rounded-xl "
            src={require(`../assets/images/image-product-${i + 1}-thumbnail.jpg`)}
            alt={`thumb-${i + 1}`}
          />
        </div>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings} className="min-w-[350px] md:w-full rounded-2xl">
        <div>
          <img src={Product1} className="object-cover w-full rounded-2xl" alt="product1" />
        </div>
        <div>
          <img src={Product2} className="object-cover w-full rounded-2xl" alt="product2" />
        </div>
        <div>
          <img src={Product3} className="object-cover w-full rounded-2xl" alt="product3" />
        </div>
        <div>
          <img src={Product4} className="object-cover w-full rounded-2xl" alt="product4" />
        </div>
      </Slider>
    </>
  );
};

export default CarouselProduct;
