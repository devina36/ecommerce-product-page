import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Product1, Product2, Product3, Product4 } from '../assets/images';
import { Modal } from '@mui/material';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="before:content-[url('./assets/images/icon-next.svg')] before:absolute cursor-pointer before:scale-75
      flex justify-center items-center before:p-0 before:-mb-1 shadow-sm hover:opacity-75 z-30 right-4 md:hidden
      bg-white w-[40px] h-[40px] absolute rounded-full opacity-100 top-1/2 -translate-y-1/2"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="
      before:content-[url('./assets/images/icon-previous.svg')] before:absolute cursor-pointer before:scale-75
      flex justify-center items-center before:p-0 before:-mb-1 shadow-sm hover:opacity-75 z-30 left-4 md:hidden
      bg-white w-[40px] h-[40px] absolute rounded-full opacity-100 top-1/2 -translate-y-1/2"
      onClick={onClick}
    />
  );
}

const CarouselProduct = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <Slider {...settings} className="w-full md:rounded-2xl">
        <div>
          <span onClick={handleOpen} className="w-full overflow-hidden">
            <img src={Product1} className="object-cover w-full md:rounded-2xl h-[300px] md:h-auto" alt="product1" />
          </span>
        </div>
        <div>
          <span onClick={handleOpen} className="w-full overflow-hidden">
            <img src={Product2} className="object-cover w-full md:rounded-2xl h-[300px] md:h-auto" alt="product2" />
          </span>
        </div>
        <div>
          <span onClick={handleOpen} className="w-full overflow-hidden">
            <img src={Product3} className="object-cover w-full md:rounded-2xl h-[300px] md:h-auto" alt="product3" />
          </span>
        </div>
        <div>
          <span onClick={handleOpen} className="w-full overflow-hidden">
            <img src={Product4} className="object-cover w-full md:rounded-2xl h-[300px] md:h-auto" alt="product4" />
          </span>
        </div>
      </Slider>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="flex justify-center h-screen items-center">
          <div className="w-1/5">
            <button onClick={handleClose}>close</button>
            coba
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CarouselProduct;
