import React from "react";
import propertyImg from "../public/Assets/Projects/property.jpg";
import Link from "next/link";
import Image from "next/image";
const ProjectItem = () => {
  return (
    <div className=" relative flex items-center justify-center h-auto w-full shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r  from-[#5651e5] to-[#709dff] ">
      <Image
        src={propertyImg}
        alt="/"
        className=" rounded-xl group-hover:opacity-10"
      />
      <div className=" hidden group-hover:block absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className=" text-2xl text-white  tracking-wider text-center">
          Property Finder
        </h3>
        <p className="  text-white pb-4  pt-2 text-center">React JS</p>
        <Link href="/property">
          <p className=" text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};
export default ProjectItem;
