import Image from "next/image";
import React from "react";
import contact from "../public/contact.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
const Contact = () => {
  return (
    <div id="contact" className=" w-full lg:h-screen">
      <div className=" max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className=" uppercase tracking-wider">Conatct</p>
        <div className="flex-col  justify-between  lg:grid grid-cols-2 gap-8">
          <div className=" grid lg:grid-col-5 gap-8  mr-2">
            <div className=" col-span-3 lg:col-span-2 w-[400px] h-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full ">
                <div>
                  <Image src={contact} height="4000px" width="4000px" />
                </div>
                <div className="py-2">
                  <h2>請與我聯繫</h2>
                </div>

                <div className=" flex items-center justify-between max-w-[330px] m-auto py-4">
                  <Link href="https://www.instagram.com/">
                    <div
                      className="
                  rounded-full 
                  shadow-lg
                shadow-gray-400 
                  p-3 cursor-pointer
                  hover:scale-110
                  ease-in 
                  duration-75"
                    >
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <div
                    className="rounded-full 
                shadow-lg
                shadow-gray-400 
                p-3 cursor-pointer
                hover:scale-105
                ease-in 
                duration-75"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                  <Link href="https://github.com/zhongzhengguang">
                    <div
                      className="rounded-full 
                shadow-lg
                shadow-gray-400 
                p-3 cursor-pointer
                hover:scale-105
                ease-in 
                duration-75"
                    >
                      <FaGithub />
                    </div>
                  </Link>
                  <div
                    className="rounded-full 
                shadow-lg
                shadow-gray-400 
                p-3 cursor-pointer
                hover:scale-105
                ease-in 
                duration-75"
                  >
                    <AiOutlineMail />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" mt-3 w-[50vh]">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="number" placeholder="Phone Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="Email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Message</Form.Label>
                  <Form.Control type="password" className="= h-[200px]" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className=" w-[50vh] justify-center"
                >
                  Send Message
                </Button>
              </Form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12 cursor-pointer">
          <Link href="/">
            <div className="w-full flex justify-center items-center">
              <HiOutlineChevronDoubleUp size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Contact;
