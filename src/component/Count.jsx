import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { TiPlus, TiMinus } from 'react-icons/ti';

const Count = () => {
  const [count, setCount] = useState(0);

  const minus = () => {
    setCount(count - 1);
  };
  const plus = () => {
    setCount(count + 1);
  };

  const addChart = () => {
    const get = JSON.parse(localStorage.getItem('data')) || null;
    localStorage.setItem('data', JSON.stringify(get + count));
    window.location.reload();
  };
  return (
    <>
      <div className="flex gap-4 w-full">
        <div className="relative w-full md:max-w-[156px] flex justify-center items-center bg-light-grayish-blue rounded-xl">
          <button
            className=" absolute text-oranges px-3 h-full top-0 left-0 rounded-l-lg disabled:hover:opacity-100 hover:opacity-60"
            disabled={count === 0 || (count < 0 && true)}
            onClick={minus}
          >
            <TiMinus size={20} />
          </button>
          <span className="font-bold py-4">{count}</span>
          <button
            className=" 
            absolute text-oranges px-3 h-full top-0 right-0 rounded-r-lg hover:opacity-60"
            onClick={plus}
          >
            <TiPlus size={17} />
          </button>
        </div>
        <button
          onClick={addChart}
          className="w-full md:max-w-[272px] rounded-lg shadow-2xl shadow-oranges bg-oranges flex justify-center items-center gap-5"
        >
          <BsCart2 className="text-white" />
          <span className="text-white">Add to cart</span>
        </button>
      </div>
    </>
  );
};

export default Count;
