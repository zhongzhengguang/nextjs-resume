import React from "react";

import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className=" w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className=" py-4 text-gray-700">
            我是 <span className="text-gray-700"> 鍾政廣 </span>
          </h1>
          <h1 className=" py-4 text-gray-700 w-full">這是我第一份履歷</h1>
          <Link href="#about">
            <p
              className="
              mt-5
              rounded-full 
              shadow-lg
              shadow-gray-400 
              p-3 cursor-pointer
              hover:scale-105
              ease-in 
              duration-75"
            >
              開始
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Main;
