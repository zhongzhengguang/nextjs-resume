import React from "react";
import Image from "next/image";
let skillsdata = [
  { skillsname: "css", skillsImg: "/../public/Assets/Skills/css.png" },
  { skillsname: "github", skillsImg: "/../public/Assets/Skills/github.png" },
  { skillsname: " html", skillsImg: "/../public/Assets/Skills/html.png" },
  {
    skillsname: "javascript",
    skillsImg: "/../public/Assets/Skills/javascript.png",
  },
  { skillsname: "nextjs", skillsImg: "/../public/Assets/Skills/nextjs.png" },
  { skillsname: "react", skillsImg: "/../public/Assets/Skills/react.png" },
];

const Skills = ({ item }) => {
  return (
    <div id="skills" className=" w-full lg:h-screen p-2 mt-5">
      <div className=" max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className=" text-xl tracking-widest uppercase mb-10">Skills</p>
        <div className=" grid gap-8 md:grid-cols-4 lg:grid-cols-4">
          {skillsdata.map((item) => (
            <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in  duration-300 ">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto" key={item.id}>
                  <Image
                    src={item.skillsImg}
                    alt="/"
                    width="64px"
                    height="64px"
                  />
                </div>
                <div key={item.id}>{item.skillsname}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
