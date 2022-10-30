import React from "react";
import about from "../public/about.jpg";
import Image from "next/image";
const About = () => {
  return (
    <>
      <div id="about" className=" w-full md:h-screen p-2 items-center py-16">
        <p className=" py-4 tracking-widest max-w-[1240px] m-auto uppercase">
          About
        </p>
        <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className=" col-span-2 ">
            <h1 className="py-4">關於我</h1>
            <p className=" py-2">
              1. 您好我是鍾政廣，個性活潑，喜歡學習及體驗全新的事物。
              <br />
              <br />
              2. 大二時擔任材料系公關，參與或聯合舉辦多數活動。
              大三時曾在科技公司擔任後段工程師助理，協助了解每日不良品原因及改善方式。
              大四時曾協助研究所學長完成畢業專題相關事宜如藥品調配以及透光度分析。
              <br />
              <br />
              3. 經歷：京元電子（配件工程師） 2020/08/01 ~ 2021/09/31
              <br />
              <br />
            </p>
          </div>
          <div className=" w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-300">
            <Image className=" rounded-xl" src={about} alt="/" />
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
